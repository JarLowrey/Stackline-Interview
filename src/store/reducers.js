import { combineReducers } from "redux";
import { LOAD_CHART_DATA } from './actionTypes';

function loadChartData(
    state = {
        weekEnding: [],
        retailSales: [],
        wholesaleSales: [],
        unitsSold: [],
        retailerMargin: []
    },
    action
) {
    switch (action.type) {
        case LOAD_CHART_DATA:
            const sales = action.retailSaleData[action.index].sales;

            return Object.assign({}, state, {
                weekEnding: sales.map(x => x.weekEnding + " 00:00:00"),
                retailSales: sales.map(x => x.retailSales),
                wholesaleSales: sales.map(x => x.wholesaleSales),
                unitsSold: sales.map(x => x.unitsSold),
                retailerMargin: sales.map(x => x.retailerMargin),
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    loadDataReducer: loadChartData
});

export default rootReducer;