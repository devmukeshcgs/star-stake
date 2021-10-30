import { all, takeEvery, fork } from "redux-saga/effects";
import actions from "./actions";

export function* addTRANSACTION() {
  yield takeEvery(actions.ADD_TRANSACTION, function* () {});
}
export function* editTRANSACTION() {
  yield takeEvery(actions.EDIT_TRANSACTION, function* () {});
}
export function* deleteTRANSACTION() {
  yield takeEvery(actions.DELETE__TRANSACTION, function* () {});
}
export default function* rootSaga() {
  yield all([
    fork(addTRANSACTION),
    fork(editTRANSACTION),
    fork(deleteTRANSACTION),
  ]);
}
