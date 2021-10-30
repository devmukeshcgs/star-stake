import { all, takeEvery, fork } from "redux-saga/effects";
import actions from "./actions";

export function* addContact() {
  yield takeEvery(actions.ADD_PROFILE, function* () {});
}
export function* editContact() {
  yield takeEvery(actions.EDIT_PROFILE, function* () {});
}
export function* deleteContact() {
  yield takeEvery(actions.DELETE__PROFILE, function* () {});
}
export default function* rootSaga() {
  yield all([fork(addContact), fork(editContact), fork(deleteContact)]);
}
