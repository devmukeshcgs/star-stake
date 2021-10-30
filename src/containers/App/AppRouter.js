import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../helpers/asyncComponent";
import { AppRouterWrapper } from "./app.style";

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../MainLayout/MainLayout")),
  },
  {
    path: "transactions",
    component: asyncComponent(() => import("../Transactions")),
  },
  {
    path: "payments",
    component: asyncComponent(() => import("../Payments")),
  },
  {
    path: "profile",
    component: asyncComponent(() => import("../Profile")),
  },
  {
    path: "rewards",
    component: asyncComponent(() => import("../Rewards")),
  },
  {
    path: "contacts",
    component: asyncComponent(() => import("../Contacts")),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    console.log("URL", url);
    return (
      <AppRouterWrapper>
        {routes.map((singleRoute) => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </AppRouterWrapper>
    );
  }
}

export default AppRouter;
