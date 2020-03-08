import { DETAIL_ACTIONS } from "actions/constants";
import gasStationDetail from "../gasStationDetail";

describe("gasStationDetail", () => {
  const initialState = {
    gasStationDetail: {}
  };

  it("should update gasStationDetail correctly", () => {
    const fakeBadPayload = {
      fakeData: "fakeData",
      address: "",
      city: "",
      country: "",
      diesel_date: "",
      diesel_price: "",
      lat: "",
      lng: "",
      mid_date: "",
      mid_price: "",
      pre_date: "",
      pre_price: "",
      reg_date: "",
      reg_price: "",
      region: "",
      station_name: "",
      zip: ""
    };
    const fakeGoodPayload = Object.assign({}, fakeBadPayload);
    delete fakeGoodPayload.fakeData;

    expect(
      gasStationDetail(initialState, {
        type: DETAIL_ACTIONS.UPDATE_GAS_STATION_DETAIL,
        payload: { gasStationDetail: fakeBadPayload }
      })
    ).toEqual(Object.assign({}, initialState, { gasStationDetail: fakeGoodPayload }));
  });
});
