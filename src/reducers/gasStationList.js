import { LIST_ACTIONS } from "actions/constants";

const initialState = {
  gasStationList: []
};

const gasStationList = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ACTIONS.UPDATE_GAS_STATION_LIST: {
      return { ...state, gasStationList: payload.gasStationList };
    }

    default: {
      return state;
    }
  }
};

export default gasStationList;
