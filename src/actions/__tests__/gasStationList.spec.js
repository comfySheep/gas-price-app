import { getGasStationList } from "../gasStationList";
import { getGasStationsService } from "services";
jest.mock("services");

describe("getGasStationList", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should UPDATE_GAS_STATION_LIST if getGasStationsService resolves", async () => {
    const fakeStations = [
      {
        reg_price: "3.79"
      },
      {
        reg_price: "4.79"
      }
    ];

    getGasStationsService.mockReturnValue(Promise.resolve({ stations: fakeStations }));

    await getGasStationList({})(dispatch);

    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        loading: true
      },
      type: "UPDATE_LOADING"
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        gasStationList: fakeStations
      },
      type: "UPDATE_GAS_STATION_LIST"
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      payload: {
        loading: false
      },
      type: "UPDATE_LOADING"
    });
  });

  it("should UPDATE_GAS_STATION_LIST if getGasStationsService resolves but filter out invalid reg_price when sortBy price", async () => {
    const fakeStations = [
      {
        reg_price: "N/A"
      },
      {
        reg_price: "4.79"
      }
    ];

    getGasStationsService.mockReturnValue(Promise.resolve({ stations: fakeStations }));

    await getGasStationList({ sortBy: "price" })(dispatch);

    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        loading: true
      },
      type: "UPDATE_LOADING"
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        gasStationList: fakeStations.slice(1)
      },
      type: "UPDATE_GAS_STATION_LIST"
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      payload: {
        loading: false
      },
      type: "UPDATE_LOADING"
    });
  });

  it("should UPDATE_GAS_STATION_LIST if getGasStationsService resolves even when response is corrupted", async () => {
    const corruptedResponse = `Warning (2): file_get_contents(http://www.mapquestapi.com/geocoding/v1/reverse?key=Fmjtd%7Cluua2g6zl1%2C7w%3Do5-hf8xq&lat=32.860&lng=-117.209) [APP/views/stations/json/radius.ctp, line 2]{"status":{"error":"NO","code":200,"description":"none","message":"Request ok"},"geoLocation":{"country_short":null,"address":null,"lat":"32.860","lng":"-117.209","country_long":"Other","region_short":null,"region_long":null,"city_long":null},"stations":[{"country":"United States","zip":"92122","reg_price":"3.79","mid_price":"3.89","pre_price":"3.99","diesel_price":"N\/A","reg_date":"7 years ago","mid_date":"7 years ago","pre_date":"7 years ago","diesel_date":"7 years ago","address":"3860 Governor Dr","diesel":"1","id":"97162","lat":"32.854599","lng":"-117.205353","station":null,"region":"California","city":null,"distance":"0.4 miles"}]}`;
    getGasStationsService.mockReturnValue(Promise.resolve(corruptedResponse));

    await getGasStationList({})(dispatch);

    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        loading: true
      },
      type: "UPDATE_LOADING"
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        gasStationList: [
          {
            address: "3860 Governor Dr",
            city: null,
            country: "United States",
            diesel: "1",
            diesel_date: "7 years ago",
            diesel_price: "N/A",
            distance: "0.4 miles",
            id: "97162",
            lat: "32.854599",
            lng: "-117.205353",
            mid_date: "7 years ago",
            mid_price: "3.89",
            pre_date: "7 years ago",
            pre_price: "3.99",
            reg_date: "7 years ago",
            reg_price: "3.79",
            region: "California",
            station: null,
            zip: "92122"
          }
        ]
      },
      type: "UPDATE_GAS_STATION_LIST"
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      payload: {
        loading: false
      },
      type: "UPDATE_LOADING"
    });
  });

  it("should alert if getGasStationsService rejects", async () => {
    const message = "failed message";
    const rejectPromise = Promise.reject({ Status: { message } });

    jest.spyOn(window, "alert").mockImplementation(() => {});
    getGasStationsService.mockReturnValue(rejectPromise);

    await getGasStationList({})(dispatch);

    rejectPromise.catch(() => {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { payload: { loading: true }, type: "UPDATE_LOADING" });
      expect(dispatch).toHaveBeenNthCalledWith(2, { payload: { loading: false }, type: "UPDATE_LOADING" });
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(message);
    });
  });
});
