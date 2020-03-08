import { APP_ACTIONS } from "actions/constants";
import app from "../app";

describe("app", () => {
  const initialState = {
    loading: false
  };

  it("should update loading correctly", () => {
    const fakePayload = {
      loading: true
    };

    expect(app(initialState, { type: APP_ACTIONS.UPDATE_LOADING, payload: fakePayload })).toEqual(
      Object.assign({}, initialState, { ...fakePayload })
    );
  });
});
