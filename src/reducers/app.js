import { APP_ACTIONS } from "actions/constants";

const initialState = {
  loading: false
};

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTIONS.UPDATE_LOADING: {
      const { loading } = payload;
      return { ...state, loading };
    }

    default: {
      return state;
    }
  }
};

export default app;
