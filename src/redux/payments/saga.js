import { all, takeEvery, fork } from "redux-saga/effects";
import actions from "./actions";

export function* addPAYMENTS() {
  yield takeEvery(actions.ADD_PAYMENTS, function* () {});
}
export function* editPAYMENTS() {
  yield takeEvery(actions.EDIT_PAYMENTS, function* () {});
}
export function* deletePAYMENTS() {
  yield takeEvery(actions.DELETE__PAYMENTS, function* () {});
}
export default function* rootSaga() {
  yield all([fork(addPAYMENTS), fork(editPAYMENTS), fork(deletePAYMENTS)]);
}
