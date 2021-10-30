import { transactions } from "./reducer";

function ascendingSort(transaction1, transaction2) {
  const name1 = transaction1.name ? transaction1.name.toUpperCase() : "~";
  const name2 = transaction2.name ? transaction2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const transactionActions = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  EDIT_TRANSACTION: "EDIT_TRANSACTION",
  DELETE__TRANSACTION: "DELETE__TRANSACTION",
  CHANGE_TRANSACTION: "CHANGE_TRANSACTION",
  EDIT_VIEW: "EDIT_VIEW",
  changetransaction: (id) => ({
    type: transactionActions.CHANGE_TRANSACTION,
    id,
  }),
  addtransaction: () => {
    const newtransaction = {
      id: new Date(),
      firstName: "",
      avatar: transactions[new Date() % 10].avatar,
      LastName: "",
      mobile: "",
      home: "",
      name: "",
      company: "",
      work: "",
      note: "",
    };
    return (dispatch, getState) => {
      dispatch({
        type: transactionActions.ADD_TRANSACTION,
        transactions: [...getState().transactions.transactions, newtransaction],
        selectedId: newtransaction.id,
      });
    };
  },
  edittransaction: (newtransaction) => {
    return (dispatch, getState) => {
      const transactions = getState().transactions.transactions;
      const newtransactions = [];
      transactions.forEach((transaction) => {
        if (transaction.id === newtransaction.id) {
          newtransactions.push(newtransaction);
        } else {
          newtransactions.push(transaction);
        }
      });
      dispatch({
        type: transactionActions.EDIT_TRANSACTION,
        transactions: newtransactions.sort(ascendingSort),
      });
    };
  },
  deletetransaction: (id) => {
    return (dispatch, getState) => {
      const transactions = getState().transactions.transactions;
      const seectedId = getState().transactions.seectedId;
      const newtransactions = [];
      transactions.forEach((transaction) => {
        if (transaction.id === id) {
        } else {
          newtransactions.push(transaction);
        }
      });
      dispatch({
        type: transactionActions.DELETE__TRANSACTION,
        transactions: newtransactions,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: transactionActions.EDIT_VIEW,
    view,
  }),
};
export default transactionActions;
