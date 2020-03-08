import { getGasStationList } from "../gasStationList";
import { getGasStationsService } from "services";
jest.mock("services");

/* import { getGasStationsService } from "services";
import { LIST_ACTIONS, APP_ACTIONS } from "./constants";

const getGasStationList = params => {
  return dispatch => {
    dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: true } });

    return getGasStationsService(params)
      .then(res => {
        if (typeof res !== "object") {
          res = JSON.parse(res.substring(res.indexOf('{"status":{"error":')));
        }

        const { sortBy } = params;
        let { stations } = res;
        if (sortBy === "price") {
          let sliceIndex = 0;
          for (let index in stations) {
            const station = stations[index];
            if (!isNaN(Number(station.reg_price))) {
              sliceIndex = index;
              break;
            }
          }
          stations = stations.slice(sliceIndex);
        }
        dispatch({ type: LIST_ACTIONS.UPDATE_GAS_STATION_LIST, payload: { gasStationList: stations } });
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      })
      .catch(err => {
        const { message } = (err && err.Status) || {};
        alert(message);
        dispatch({ type: APP_ACTIONS.UPDATE_LOADING, payload: { loading: false } });
      });
  };
};

export { getGasStationList };
 */

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
      },
      {
        reg_price: "5.79"
      },
      {
        reg_price: "6.79"
      },
      {
        reg_price: "7.79"
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
      },
      {
        reg_price: "5.79"
      },
      {
        reg_price: "6.79"
      },
      {
        reg_price: "7.79"
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
});
