import { constants, request } from "tools";

const { API_KEY } = constants;

export function getGasStationsService(params) {
  const { latitude, longitude, distance, fuelType, sortBy } = params;

  return request({
    url: `/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${API_KEY}`,
    method: "get"
  });
}

export function getGasStationDetailService({ stationId }) {
  return request({
    url: `/stations/details/${stationId}/${API_KEY}`,
    method: "get"
  });
}
