import { LIST_ACTIONS } from "actions/constants";
import gasStationList from "../gasStationList";

describe("gasStationList", () => {
  const initialState = {
    gasStationList: []
  };

  it("should update gasStationList correctly", () => {
    const fakePayload = {
      gasStationList: ["1", "2"]
    };

    expect(
      gasStationList(initialState, {
        type: LIST_ACTIONS.UPDATE_GAS_STATION_LIST,
        payload: fakePayload
      })
    ).toEqual(Object.assign({}, initialState, { ...fakePayload }));
  });
});
