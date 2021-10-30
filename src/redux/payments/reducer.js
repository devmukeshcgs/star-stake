import fakeData from "../../containers/Transactions/fakeData";
import paymentActions from "./actions";

const payments = new fakeData(10).getAll();
// const payments = [{}];

const initState = {
  payments,
  seectedId: payments[0].id,
  editView: false,
};

export default function transactionReducer(state = initState, action) {
  switch (action.type) {
    case paymentActions.CHANGE_TRANSACTION:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case paymentActions.ADD_TRANSACTION:
      return {
        ...state,
        payments: action.payments,
        seectedId: action.selectedId,
        editView: true,
      };
    case paymentActions.EDIT_TRANSACTION:
      return {
        ...state,
        payments: action.payments,
      };
    case paymentActions.DELETE__TRANSACTION:
      return {
        ...state,
        payments: action.payments,
        seectedId: action.seectedId,
      };
    case paymentActions.EDIT_VIEW:
      return {
        ...state,
        editView: action.view,
      };
    default:
      return state;
  }
}

export { payments };
