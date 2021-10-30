import fakeData from "../../containers/Transactions/fakeData";
import transactionActions from "./actions";

const transactions = new fakeData(10).getAll();
// const transactions = [{}];

const initState = {
  transactions,
  seectedId: transactions[0].id,
  editView: false,
};

export default function transactionReducer(state = initState, action) {
  switch (action.type) {
    case transactionActions.CHANGE_TRANSACTION:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case transactionActions.ADD_TRANSACTION:
      return {
        ...state,
        transactions: action.transactions,
        seectedId: action.selectedId,
        editView: true,
      };
    case transactionActions.EDIT_TRANSACTION:
      return {
        ...state,
        transactions: action.transactions,
      };
    case transactionActions.DELETE__TRANSACTION:
      return {
        ...state,
        transactions: action.transactions,
        seectedId: action.seectedId,
      };
    case transactionActions.EDIT_VIEW:
      return {
        ...state,
        editView: action.view,
      };
    default:
      return state;
  }
}

export { transactions };
