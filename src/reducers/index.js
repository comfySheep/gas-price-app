import { combineReducers } from "redux";
import gasStationDetail from "./gasStationDetail";
import gasStationList from "./gasStationList";

const rootReducer = combineReducers({ gasStationDetail, gasStationList });

export default rootReducer;
