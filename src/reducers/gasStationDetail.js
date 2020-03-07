import { DETAIL_ACTIONS } from "actions/constants";
const initialState = {
  gasStationDetail: {}
};

const gasStationDetail = (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAIL_ACTIONS.UPDATE_GAS_STATION_DETAIL: {
      const gasStationDetail = {
        address: payload.address,
        city: payload.city,
        region: payload.region,
        country: payload.country,
        lat: payload.lat,
        lng: payload.lng,
        station_name: payload.station_name,
        zip: payload.zip,
        reg_price: payload.reg_price,
        reg_date: payload.reg_date,
        mid_price: payload.mid_price,
        mid_date: payload.mid_date,
        pre_price: payload.pre_price,
        pre_date: payload.pre_date,
        diesel_price: payload.diesel_price,
        diesel_date: payload.diesel_date
      };
      return { ...state, gasStationDetail };
    }

    default: {
      return state;
    }
  }
};

export default gasStationDetail;
