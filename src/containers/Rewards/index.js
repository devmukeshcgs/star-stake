import React, { Component } from "react";
import { connect } from "react-redux";
// import rewardAction from "../../redux/rewards/actions";

// const {
//   changeContact,
//   addContact,
//   editContact,
//   deleteContact,
//   viewChange,
// } = rewardAction;

class Reward extends Component {
  render() {
    return (
      <>
        <h1>REWARD PAGE</h1>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(Reward);
