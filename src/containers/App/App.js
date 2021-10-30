import React from "react";

import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import themes from "../../settings/themes";
import { themeConfig } from "../../settings";
import ToggleButton from "./../../componants/ToggleButton";

// import AppHolder from "./commonStyle";
// import "./global.css";
import { connect } from "react-redux";
import appTheme from "./../../constants/theme";
import { toggleTheme } from "./../../redux/themeSwitcher/actions";
import MainLayout from "../MainLayout/MainLayout";

import Sidebar from "../Sidebar/Sidebar";
import AppStyleWrapper, { LayoutWrapper } from "./app.style";
import AppRouter from "./AppRouter";
import Topbar from "../Topbar/Topbar";
import Cards from "../../componants/Cards";

// const propTypes = {};
// const defaultProps = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("App PROPS", this.props);
    console.log("App STATE", this.state);
    const { app } = this.props;
    const collapsed = app.collapsed && !app.openDrawer;
    console.log("App COLLPSED", this.props.app.collapsed);

    const { url } = this.props.match;
    const { locale, selectedTheme, height } = this.props;
    return (
      // <ThemeProvider theme={themes[themeConfig.theme]}>
      <AppStyleWrapper>
        {/* <ToggleButton /> */}
        {/* SIDEBAR */}
        <Sidebar />
        {/* Main Wrapper */}

        <LayoutWrapper collapsed={collapsed}>
          <Topbar />
          <AppRouter url={url} />
        </LayoutWrapper>
        {/* <Footer>{siteConfig.footerText}</Footer> */}
      </AppStyleWrapper>
      // </ThemeProvider>
    );
  }
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    app: state.App,
    // appTheme: state.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(
//   (state) => ({
//     app: state.App,
//   }),
//   { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
// )(Sidebar);
