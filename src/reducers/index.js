import { combineReducers } from "redux";
import app from "./app";
import gasStationDetail from "./gasStationDetail";
import gasStationList from "./gasStationList";

const rootReducer = combineReducers({ app, gasStationDetail, gasStationList });

export default rootReducer;
