import mainData from "./reducer";
import actions from "./../auth/actions";

const MainLayoutactions = {
  CARD_REQUEST: "CARD_REQUEST",
  CARD_SUCCESS: "CARD_SUCCESS",
  CARD_ERROR: "CARD_ERROR",
  cardRequest: () => {
    return {
      type: MainLayoutactions.CARD_REQUEST,
    };
  },
  cardSuccess: (data) => ({
    type: MainLayoutactions.CARD_SUCCESS,
    payload: { data },
  }),
  cardError: () => {},
};
export default MainLayoutactions;
