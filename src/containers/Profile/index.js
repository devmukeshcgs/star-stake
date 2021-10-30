import React, { Component } from "react";
import { connect } from "react-redux";
import profileActions from "../../redux/profile/actions";

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange,
} = profileActions;

class Profile extends Component {
  render() {
    return (
      <>
        <h1>Profile PAGE</h1>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(Profile);
