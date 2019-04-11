import { combineReducers } from "redux";
import { LOAD_DATA } from './actionTypes';

function loadDataReducer(
    state = {
        retailSaleData: {},
    },
    action
) {
    switch (action.type) {
        case LOAD_DATA:
            return Object.assign({}, state, {
                retailSaleData: action.retailSaleData
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    loadDataReducer
});

export default rootReducer;