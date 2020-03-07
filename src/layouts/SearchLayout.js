import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGasStationList } from "actions/gasStationList";
import { constants, helpers } from "tools";
import { Loading } from "components";

const { SEARCH_SORT_OPTIONS, SEARCH_DISTANCE_OPTIONS } = constants;
const { handleDisplaySearchStationList } = helpers;

class SearchLayout extends Component {
  constructor() {
    super();

    this.state = { sortBy: "distance", searchDistance: 1 };

    this.handleUpdateSortBy = this.handleUpdateSortBy.bind(this);
    this.handleUpdateSearchDistance = this.handleUpdateSearchDistance.bind(this);
  }

  UNSAFE_componentWillMount = () => {
    const { location } = this.props;
    const pathname = location ? location.pathname : "";

    if (pathname.includes("station")) return;

    this.handleSearchStations();
  };

  handleUpdateSortBy = e => {
    const sortBy = e.target.value;

    this.setState({ sortBy });
    this.handleSearchStations();
  };

  handleUpdateSearchDistance = e => {
    const searchDistance = e.target.value;

    this.setState({ searchDistance });
    this.handleSearchStations();
  };

  handleSearchStations = () => {
    navigator.geolocation.getCurrentPosition(this.handleGetGasStationList, () => {});
  };

  handleGetGasStationList = position => {
    const { getGasStationList } = this.props;
    const { sortBy, searchDistance } = this.state;
    const { latitude, longitude } = (position && position.coords) || { latitude: 32.9596, longitude: -117.1578 };
    const params = {
      latitude: latitude.toFixed(3),
      longitude: longitude.toFixed(3),
      distance: searchDistance,
      fuelType: "reg",
      sortBy
    };

    getGasStationList(params);
    handleDisplaySearchStationList();
  };

  render() {
    const { loading } = this.props;

    return (
      <Fragment>
        <div id="search-layout">
          <div id="sort-buttons-container">
            <span>Sort By: </span>
            {SEARCH_SORT_OPTIONS.map(({ key, name }) => (
              <button className="btn" key={`search-sort-option-${key}`} value={key} onClick={this.handleUpdateSortBy}>
                {name}
              </button>
            ))}
          </div>
          <div id="distance-buttons-container">
            <span>Within: </span>
            {SEARCH_DISTANCE_OPTIONS.map(searchDistanceOption => (
              <button
                className="btn"
                key={`search-distance-option-${searchDistanceOption}`}
                value={searchDistanceOption}
                onClick={this.handleUpdateSearchDistance}
              >
                {searchDistanceOption} {searchDistanceOption === 1 ? "mile" : "miles"}
              </button>
            ))}
          </div>
        </div>
        {loading ? <Loading /> : null}
        <div id="search-content-container" className={`${loading ? "hidden " : ""}search-content-container`}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = ({ app }) => ({ ...app });

const mapActionsToProps = { getGasStationList };

export default connect(mapStatetoProps, mapActionsToProps)(SearchLayout);
