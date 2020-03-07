import React, { Component } from "react";
import { connect } from "react-redux";
import { getGasStationDetail } from "actions/gasStationDetail";

class GasStationDetail extends Component {
  componentDidMount = () => {
    const {
      match: {
        params: { stationId }
      }
    } = this.props;
    if (!!stationId) {
      this.handleGetGasStationDetail(stationId);
    }
  };

  handleGetGasStationDetail = stationId => {
    const { getGasStationDetail } = this.props;

    getGasStationDetail({ stationId });
  };

  renderLocationToMap = location => {
    const mapKey = "AIzaSyCQMfTi3tCDb9SvQewB2v0OWgVyWzkFn9k";
    this.loadScript(`https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMap`);
    window.initMap = this.initMap.bind(this, location);
  };

  loadScript = url => {
    const index = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.appendChild(script);
  };

  initMap = location => {
    const { lat, lng } = location;
    const map = new window.google.maps.Map(document.getElementById("map"));
    const bounds = new window.google.maps.LatLngBounds();
    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map
    });

    bounds.extend(marker.position);
    map.fitBounds(bounds);
  };

  render() {
    const {
      station_name,
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
      lat,
      lng
    } = this.props.gasStationDetail;

    if (lat && lng) {
      const location = { lat, lng };
      this.renderLocationToMap(location);
    }

    return (
      <div id="gas-station-detail">
        <div id="map" />
        <div className="station_name">{station_name}</div>
        <div className="station-address">
          {address}, {zip}
        </div>
        <div className="station-price station-reg-price">Regular - {reg_price}</div>
        <div className="station-price-date station-reg-price-date">{reg_date}</div>
        <div className="station-price station-mid-price">Medium - {mid_price}</div>
        <div className="station-price-date station-mid-price-date">{mid_date}</div>
        <div className="station-price station-pre-price">Premium - {pre_price}</div>
        <div className="station-price-date station-pre-price-date">{pre_date}</div>
        <div className="station-price station-diesel-price">Diesel - {diesel_price}</div>
        <div className="station-price-date station-diesel-price-date">{diesel_date}</div>
      </div>
    );
  }
}

const mapStatetoProps = ({ gasStationDetail }) => {
  return { ...gasStationDetail };
};

const mapActionsToProps = { getGasStationDetail };

export default connect(mapStatetoProps, mapActionsToProps)(GasStationDetail);
