import { getGasStationsService } from "services";
import { LIST_ACTIONS, APP_ACTIONS } from "./constants";

const getGasStationList = params => {
  return dispatch => {
    dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: true } });

    getGasStationsService(params)
      .then(res => {
        if (typeof res !== "object") {
          res = JSON.parse(res.substring(res.indexOf('{"status":{"error":')));
        }

        const { stations } = res;

        dispatch({ type: LIST_ACTIONS.UPDATE_GAS_STATION_LIST, payload: { gasStationList: stations } });
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      })
      .catch(err => {});
  };
};

export { getGasStationList };
