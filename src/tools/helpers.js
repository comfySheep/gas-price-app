import history from "History";

const handleSelectStation = stationId => {
  history.push(`/gas-price-app/station/${stationId}`);
};

const handleDisplaySearchStationList = () => {
  history.push("/gas-price-app");
};

export default { handleSelectStation, handleDisplaySearchStationList };
