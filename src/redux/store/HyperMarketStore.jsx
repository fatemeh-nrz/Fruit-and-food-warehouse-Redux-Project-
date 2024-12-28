// import hyperMarketReducers from "../fruit/HyperMarketReducers";
import { applyMiddleware } from "redux";

import {createStore} from "redux"
import logger from "redux-logger";
import { rootReducer } from "../rootReducer/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const hyperMarketStore = createStore(rootReducer ,composeWithDevTools(applyMiddleware(logger)));


export default hyperMarketStore;