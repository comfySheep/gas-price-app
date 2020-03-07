import React, { Component } from "react";
import { connect } from "react-redux";
import { StationList } from "./components";

class GasStationList extends Component {
  render() {
    const { gasStationList } = this.props;

    return (
      <div id="gas-station-list">
        <StationList {...{ gasStationList }} />
      </div>
    );
  }
}

const mapStatetoProps = ({ gasStationList }) => {
  return { ...gasStationList };
};

const mapActionsToProps = {};

export default connect(mapStatetoProps, mapActionsToProps)(GasStationList);
