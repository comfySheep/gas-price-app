import { getGasStationDetail } from "../gasStationDetail";
import { getGasStationDetailService } from "services";
jest.mock("services");

describe("gasStationDetail", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should UPDATE_GAS_STATION_DETAIL if getGasStationDetailService resolves", async () => {
    getGasStationDetailService.mockReturnValue(Promise.resolve({ details: { awesomeDetails: "awesome" } }));

    await getGasStationDetail({})(dispatch);

    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        loading: true
      },
      type: "UPDATE_LOADING"
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        awesomeDetails: "awesome"
      },
      type: "UPDATE_GAS_STATION_DETAIL"
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      payload: {
        loading: false
      },
      type: "UPDATE_LOADING"
    });
  });

  it("should alert if getGasStationDetailService rejects", async () => {
    const message = "failed message";
    const rejectPromise = Promise.reject({ Status: { message } });

    jest.spyOn(window, "alert").mockImplementation(() => {});
    getGasStationDetailService.mockReturnValue(rejectPromise);

    await getGasStationDetail({})(dispatch);

    rejectPromise.catch(() => {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { payload: { loading: true }, type: "UPDATE_LOADING" });
      expect(dispatch).toHaveBeenNthCalledWith(2, { payload: { loading: false }, type: "UPDATE_LOADING" });
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(message);
    });
  });
});
