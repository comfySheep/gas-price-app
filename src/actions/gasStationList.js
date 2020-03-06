import { getGasStationsService } from "services";
import { LIST_ACTIONS } from "./constants";

const getGasStationList = params => {
  return dispatch => {
    getGasStationsService(params)
      .then(res => {
        if (typeof res !== "object") {
          res = JSON.parse(res.substring(res.indexOf('{"status":{"error":')));
        }
        const { stations } = res;
        dispatch({ type: LIST_ACTIONS.UPDATE_GAS_STATION_LIST, payload: { gasStationList: stations } });
      })
      .catch(err => {});
  };
};

export { getGasStationList };
