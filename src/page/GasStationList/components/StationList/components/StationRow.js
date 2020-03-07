import React from "react";
import { helpers } from "tools";

const StationRow = props => {
  const { gasStation } = props;
  const { id, station, address, zip, reg_price, mid_price, pre_price, diesel_price, distance } = gasStation;

  return (
    <div className="generic-row" onClick={() => helpers.handleSelectStation(id)}>
      <div className="station-title">{station}</div>
      <div className="station-address">
        {address}, {zip}
      </div>
      <div className="station-price station-reg-price">Regular - {reg_price}</div>
      <div className="station-price station-mid-price">Medium - {mid_price}</div>
      <div className="station-price station-pre-price">Premium - {pre_price}</div>
      <div className="station-price station-diesel-price">Diesel - {diesel_price}</div>
      <div className="station-distance">Distance - {distance}</div>
    </div>
  );
};

export default StationRow;
