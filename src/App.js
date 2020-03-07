import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "History";
import { SearchLayout } from "layouts";
import GasStationList from "page/GasStationList";
import GasStationDetail from "page/GasStationDetail";
import "styles/index.scss";

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout {...props}>
          <Page {...props} />
        </Layout>
      );
    }}
  ></Route>
);

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/gas-price-app" layout={SearchLayout} page={GasStationList}></AppRoute>
        <AppRoute path="/gas-price-app/station/:stationId" layout={SearchLayout} page={GasStationDetail}></AppRoute>
      </Switch>
    </Router>
  );
}

export default App;
