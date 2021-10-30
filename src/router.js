import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router/immutable";
import { connect } from "react-redux";
import SignIn from "./containers/Page/SignIn";
import App from "./containers/App/App";
// import asyncComponent from "./helpers/AsyncFunc";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect((state) => ({
  isLoggedIn: true,
  isLoggedIn22: state.Auth.idToken !== null,
}))(PublicRoutes);
