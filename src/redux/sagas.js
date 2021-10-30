import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import contactSagas from "./contacts/saga";
import mainLayoutSaga from "./mainLayout/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), contactSagas(), mainLayoutSaga()]);
}
