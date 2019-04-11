import { combineReducers } from "redux";
import { LOAD_CHART_DATA } from './actionTypes';

function loadDataReducer(
    state = {
        retailSaleData: {},
        index: 0,
    },
    action
) {
    switch (action.type) {
        case LOAD_CHART_DATA:
            const itemData = action.retailSaleData[action.index];
            return Object.assign({}, state, {
                retailSaleData: itemData.sales
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    loadDataReducer
});

export default rootReducer;