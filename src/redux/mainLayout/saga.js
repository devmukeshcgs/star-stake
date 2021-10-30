import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";

export function* workerSaga() {
  console.log("WorkerSaga");
}

//  WatcherSaga
function* rootSaga() {
  yield takeEvery(actions.CARD_REQUEST, workerSaga);
}

//  Watcher saga -> action -> worker saga
export default rootSaga;

// //  WorkerSaga
// function* workerSaga() {
//     console.log("WorkerSaga");
//   }

//   //  WatcherSaga
//   function* rootSaga() {
//     yield takeEvery(actions.CARD_REQUEST, workerSaga);
//   }

//   //  Watcher saga -> action -> worker saga
//   export default rootSaga;
