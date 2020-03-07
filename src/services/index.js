import { constants, request } from "tools";
const { apiKey, url } = constants;

export function getGasStationsService(params) {
  const { latitude, longitude, distance, fuelType, sortBy } = params;
  /* return fetch(`/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${apiKey}`); */
  return request({
    url: `${url}/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${apiKey}`,
    method: "get"
  });
}

export function getGasStationDetailService({ stationId }) {
  return request({
    url: `${url}/stations/details/${stationId}/${apiKey}`,
    method: "get"
  });
}
