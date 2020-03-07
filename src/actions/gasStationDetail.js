import { getGasStationDetailService } from "services";
import { DETAIL_ACTIONS, APP_ACTIONS } from "./constants";

const getGasStationDetail = params => {
  return dispatch => {
    dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: true } });

    getGasStationDetailService(params)
      .then(res => {
        const { details, previousPrices } = res;

        dispatch({ type: DETAIL_ACTIONS.UPDATE_GAS_STATION_DETAIL, payload: { ...details, previousPrices } });
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      })
      .catch(err => {});
  };
};

export { getGasStationDetail };
