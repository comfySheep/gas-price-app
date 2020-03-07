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

        const { sortBy } = params;
        let { stations } = res;
        if (sortBy === "price") {
          let sliceIndex = 0;
          for (let index in stations) {
            const station = stations[index];
            if (!isNaN(Number(station.reg_price))) {
              sliceIndex = index;
              break;
            }
          }
          stations = stations.slice(sliceIndex);
        }
        dispatch({ type: LIST_ACTIONS.UPDATE_GAS_STATION_LIST, payload: { gasStationList: stations } });
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      })
      .catch(err => {
        const { message } = (err && err.Status) || {};
        alert(message);
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      });
  };
};

export { getGasStationList };
