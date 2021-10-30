import React, { Component } from "react";
import { connect } from "react-redux";
import transactionsAction from "../../redux/transactions/actions";
import TransactionsWrapper from "./transactions.style";

const {
  changeTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
  viewChange,
} = transactionsAction;

class Transactions extends Component {
  render() {
    return <TransactionsWrapper>transactions PAGE</TransactionsWrapper>;
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(Transactions);
