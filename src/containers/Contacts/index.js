import React, { Component } from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/actions";

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange,
} = contactAction;

class Contacts extends Component {
  render() {
    return (
      <>
        <h1>CONTACT PAGE</h1>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(Contacts);
