import React, { Component } from "react";
import { connect } from "react-redux";
import { getGasStationDetail } from "actions/gasStationDetail";
import { StationCard } from "components";

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
    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map
    });
    map.setZoom(12);
    map.panTo(marker.position);
  };

  render() {
    const { gasStationDetail } = this.props;
    const { lat, lng } = gasStationDetail;

    if (lat && lng) {
      const location = { lat, lng };
      this.renderLocationToMap(location);
    }

    return (
      <div id="gas-station-detail">
        <div id="map" />
        <StationCard {...{ gasStation: { ...gasStationDetail, station: gasStationDetail.station_name } }} />
      </div>
    );
  }
}

const mapStatetoProps = ({ gasStationDetail }) => {
  return { ...gasStationDetail };
};

const mapActionsToProps = { getGasStationDetail };

export default connect(mapStatetoProps, mapActionsToProps)(GasStationDetail);
