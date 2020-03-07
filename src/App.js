import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "History";
import { SearchLayout } from "layouts";
import GasStationList from "page/GasStationList";
import GasStationDetail from "page/GasStationDetail";

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout>
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
        <AppRoute exact path="/" layout={SearchLayout} page={GasStationList}></AppRoute>
        <AppRoute path="/station/:stationId" layout={SearchLayout} page={GasStationDetail}></AppRoute>
      </Switch>
    </Router>
  );
}

export default App;
