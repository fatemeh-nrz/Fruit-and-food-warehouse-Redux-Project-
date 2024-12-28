import { combineReducers } from "redux";
import hyperMarketReducers from "../fruit/HyperMarketReducers";
import foodReducers from "../food/FoodReducers"

export const rootReducer =combineReducers({
    food:foodReducers ,
    fruit:hyperMarketReducers
})