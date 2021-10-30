import { payments } from "./reducer";

function ascendingSort(transaction1, transaction2) {
  const name1 = transaction1.name ? transaction1.name.toUpperCase() : "~";
  const name2 = transaction2.name ? transaction2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const paymentActions = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  EDIT_TRANSACTION: "EDIT_TRANSACTION",
  DELETE__TRANSACTION: "DELETE__TRANSACTION",
  CHANGE_TRANSACTION: "CHANGE_TRANSACTION",
  EDIT_VIEW: "EDIT_VIEW",
  changetransaction: (id) => ({
    type: paymentActions.CHANGE_TRANSACTION,
    id,
  }),
  addtransaction: () => {
    const newtransaction = {
      id: new Date(),
      firstName: "",
      avatar: payments[new Date() % 10].avatar,
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
        type: paymentActions.ADD_TRANSACTION,
        payments: [...getState().payments.payments, newtransaction],
        selectedId: newtransaction.id,
      });
    };
  },
  edittransaction: (newtransaction) => {
    return (dispatch, getState) => {
      const payments = getState().payments.payments;
      const newpayments = [];
      payments.forEach((transaction) => {
        if (transaction.id === newtransaction.id) {
          newpayments.push(newtransaction);
        } else {
          newpayments.push(transaction);
        }
      });
      dispatch({
        type: paymentActions.EDIT_TRANSACTION,
        payments: newpayments.sort(ascendingSort),
      });
    };
  },
  deletetransaction: (id) => {
    return (dispatch, getState) => {
      const payments = getState().payments.payments;
      const seectedId = getState().payments.seectedId;
      const newpayments = [];
      payments.forEach((transaction) => {
        if (transaction.id === id) {
        } else {
          newpayments.push(transaction);
        }
      });
      dispatch({
        type: paymentActions.DELETE__TRANSACTION,
        payments: newpayments,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: paymentActions.EDIT_VIEW,
    view,
  }),
};
export default paymentActions;
