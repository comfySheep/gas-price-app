import { getGasStationDetailService } from "services";
import { DETAIL_ACTIONS } from "./constants";

const getGasStationDetail = params => {
  return dispatch => {
    getGasStationDetailService(params)
      .then(res => {
        const { details, previousPrices } = res;
        dispatch({ type: DETAIL_ACTIONS.UPDATE_GAS_STATION_DETAIL, payload: { ...details, previousPrices } });
      })
      .catch(err => {});
  };
};

export { getGasStationDetail };
