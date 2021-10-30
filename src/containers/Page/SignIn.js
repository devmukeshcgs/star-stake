import React from "react";
import { Link, Redirect } from "react-router-dom";

import styled from "styled-components";
import PropTypes from "prop-types";
import SignInStyleWrapper from "./signin.style";

const propTypes = {};
const defaultProps = {};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: true };
  }
  handleLogin = () => {
    // const { login, clearMenu } = this.props;
    // login();
    // clearMenu();
    this.props.history.push("/dashboard");
  };

  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      console.log(redirectToReferrer);
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">LOGO</div>
            <div>SignIn Page</div>
            <div className="isoSignInForm">
              <div className="isoInputWrapper"></div>
              <div className="isoInputWrapper"></div>
              <button onClick={this.handleLogin}>Sign In </button>
              <div className="isoCenterComponent isoHelperWrapper">
                Forgot Password
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;
// #endregion

export default SignIn;
