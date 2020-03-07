import React, { Fragment } from "react";
import { helpers, constants } from "tools";

const { handleSelectStation } = helpers;
const { CLEAR_BIT_LOGO_URL } = constants;

const StationRow = props => {
  const { gasStation } = props;
  const { id, station, address, zip, reg_price, mid_price, pre_price, diesel_price, distance } = gasStation;
  return (
    <div className="generic-row" onClick={() => handleSelectStation(id)}>
      {station ? (
        <Fragment>
          <img
            src={`${CLEAR_BIT_LOGO_URL}/${station}.com`}
            onError={err => (err.target.style.display = "none")}
            alt={`logo-${station}`}
          />
          <div className="station_name">{station}</div>
        </Fragment>
      ) : null}
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
