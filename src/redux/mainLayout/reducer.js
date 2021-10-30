import fakeData from "../../containers/MainLayout/fakeData";
import MainLayoutactions from "./actions";
const mainData = new fakeData(10).getAll();

const initialState = {
  isLoading: false,
  errorMessage: false,
  articles: {},
  modalActive: false,
  mainData,
  cards: {},
};

export default function mainLayoutReducer(state = initialState, action) {
  switch (action.type) {
    case MainLayoutactions.CARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case MainLayoutactions.CARD_SUCCESS:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case MainLayoutactions.CARD_ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    default:
      return state;
  }
}
export { mainData };
