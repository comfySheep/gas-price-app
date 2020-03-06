import React, { Component } from "react";
import { connect } from "react-redux";
import { getGasStationList } from "actions/gasStationList";
class GasStationList extends Component {
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(this.handleGetGasStationList, () => {});
  };
  handleGetGasStationList = position => {
    const { getGasStationList } = this.props;
    const { latitude, longitude } = (position && position.coords) || { latitude: 32.9596, longitude: -117.1578 };
    const params = {
      latitude: latitude.toFixed(3),
      longitude: longitude.toFixed(3),
      distance: 1,
      fuelType: "reg",
      sortBy: "price"
    };
    getGasStationList(params);
  };
  render() {
    return <div id="gas-station-list">Gas Station Detail</div>;
  }
}
const mapStatetoProps = ({ gasStationList }) => {
  return { ...gasStationList };
};

const mapActionsToProps = { getGasStationList };

export default connect(mapStatetoProps, mapActionsToProps)(GasStationList);
