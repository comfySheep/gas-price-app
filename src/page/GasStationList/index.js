import React, { Component } from "react";
import { connect } from "react-redux";
import { StationCard } from "components";
import { helpers } from "tools";

const { handleSelectStation } = helpers;

class GasStationList extends Component {
  render() {
    const { gasStationList } = this.props;

    if (gasStationList.length === 0) return "There are no gas station near you...";

    return (
      <div className="gas-station-list">
        {gasStationList.map(gasStation => (
          <StationCard key={gasStation.id} {...{ gasStation, handleSelectStation, selectable: "selectable" }} />
        ))}
      </div>
    );
  }
}

const mapStatetoProps = ({ gasStationList }) => {
  return { ...gasStationList };
};

const mapActionsToProps = {};

export default connect(mapStatetoProps, mapActionsToProps)(GasStationList);
