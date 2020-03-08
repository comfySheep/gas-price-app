import React from "react";
import { constants } from "tools";

const { CLEAR_BIT_LOGO_URL } = constants;

const StationCard = props => {
  const { gasStation, selectable, handleSelectStation } = props;
  const {
    id,
    station,
    address,
    zip,
    reg_price,
    reg_date,
    mid_price,
    mid_date,
    pre_price,
    pre_date,
    diesel_price,
    diesel_date,
    distance
  } = gasStation;
  const gasPrices = [
    { name: "Regular", price: reg_price, date: reg_date },
    { name: "Midgrade", price: mid_price, date: mid_date },
    { name: "Premium", price: pre_price, date: pre_date },
    { name: "Diesel", price: diesel_price, date: diesel_date }
  ];
  return (
    <div
      className={selectable ? `station-card ${selectable}` : "station-card"}
      onClick={handleSelectStation ? () => handleSelectStation(id) : null}
    >
      <div className="station-image">
        <img
          src={`${CLEAR_BIT_LOGO_URL}/${station}.com`}
          onError={err => (err.target.style.display = "none")}
          alt={`logo-${station}`}
        />
      </div>
      <div className="station-info">
        <div className="station-title">
          <h2 className={selectable ? "station-address" : "station-address full-width"}>
            {station ? `${station} - ` : null}
            {address}, {zip}
          </h2>
          {distance ? <div className="station-distance bold">{distance}</div> : null}
        </div>
        {gasPrices.map(({ name, price, date }, index) => (
          <div key={`station-price-container-${index}`} className="station-price-container">
            <div className="station-price">{name}</div>
            <div className="station-price bold">{isNaN(price) ? price : `$${price}`}</div>
            <div className="station-price">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationCard;
