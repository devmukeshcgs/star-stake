import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import Auth from "./auth/reducer";
import App from "./app/reducer";
import MainLayout from "./mainLayout/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";
import Contacts from "./contacts/reducer";
import Transactions from "./transactions/reducer";
import Payments from "./payments/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth,
    App,
    MainLayout,
    // ThemeSwitcher,
    Contacts,
    Transactions,
    Payments,
  });

export default createRootReducer;

////////////////////////////////////////////
// import { History } from 'history';
// import { combineReducers } from 'redux-immutable';
// import { connectRouter } from 'connected-react-router';
// const rootReducer = (history: History<any>) =>
//   combineReducers({
//     router : connectRouter(history)
//   })
// export default rootReducer;
////////////////////////////////////////////

// import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'
// import MainLayout from './../containers/MainLayout/MainLayout';
// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   ... // rest of your reducers
// })
// export default createRootReducer
