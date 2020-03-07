import React from "react";
import { StationRow } from "./components";

const StationList = props => {
  const { gasStationList } = props;

  if (gasStationList.length === 0) return "There are no gas station near you...";

  return (
    <div className="station-list">
      {gasStationList.map(gasStation => (
        <StationRow key={gasStation.id} {...{ gasStation }} />
      ))}
    </div>
  );
};

export default StationList;
