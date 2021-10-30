import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class TestComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Test Componant</p>
      </div>
    );
  }
}

TestComp.propTypes = propTypes;
TestComp.defaultProps = defaultProps;
// #endregion

export default TestComp;
