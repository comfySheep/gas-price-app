import React, { Component } from "react";
import { connect } from "react-redux";
import { getGasStationDetail } from "actions/gasStationDetail";

class GasStationDetail extends Component {
  UNSAFE_componentWillMount = () => {};
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

  render() {
    return <div id="gas-station-detail">Gas Station Detail</div>;
  }
}

const mapStatetoProps = ({ gasStationDetail }) => {
  return { ...gasStationDetail };
};

const mapActionsToProps = { getGasStationDetail };

export default connect(mapStatetoProps, mapActionsToProps)(GasStationDetail);
