import helpers from "../helpers";
import history from "History";

jest.mock("History", () => ({
  push: jest.fn()
}));

describe("helpers", () => {
  const { handleSelectStation, handleDisplaySearchStationList } = helpers;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handleSelectStation to push correct route", () => {
    const stationId = "stationId";

    handleSelectStation(stationId);

    expect(history.push).toBeCalledTimes(1);
    expect(history.push).toBeCalledWith(`/gas-price-app/station/${stationId}`);
  });

  it("should handleDisplaySearchStationList to push correct route", () => {
    handleDisplaySearchStationList();

    expect(history.push).toBeCalledTimes(1);
    expect(history.push).toBeCalledWith("/gas-price-app");
  });
});
