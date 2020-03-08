import { getGasStationsService, getGasStationDetailService } from "../index";
import request from "tools/request";

jest.mock("tools/request");

describe("services", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should getGasStationsService with correct url", () => {
    const mockParams = {
      latitude: "mockLat",
      longitude: "mockLon",
      distance: "mockDis",
      fuelType: "mockFuel",
      sortBy: "mockSort"
    };

    getGasStationsService(mockParams);

    expect(request).toBeCalledTimes(1);
    expect(request).toBeCalledWith({
      method: "get",
      url: "/stations/radius/mockLat/mockLon/mockDis/mockFuel/mockSort/rfej9napna.json"
    });
  });

  it("should getGasStationDetailService with correct url", () => {
    const mockStationId = "fakeId";

    getGasStationDetailService({ stationId: mockStationId });

    expect(request).toBeCalledTimes(1);
    expect(request).toBeCalledWith({
      method: "get",
      url: "/stations/details/fakeId/rfej9napna.json"
    });
  });
});
