import fakeData from "../../containers/Contacts/fakeData";
import profileActions from "./actions";

const profile = new fakeData(10).getAll();

const initState = {
  profile,
  seectedId: profile[0].id,
  editView: false,
};

export default function profileReducer(state = initState, action) {
  switch (action.type) {
    case profileActions.CHANGE_PROFILE:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case profileActions.ADD_PROFILE:
      return {
        ...state,
        profile: action.profile,
        seectedId: action.selectedId,
        editView: true,
      };
    case profileActions.EDIT_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case profileActions.DELETE__PROFILE:
      return {
        ...state,
        profile: action.profile,
        seectedId: action.seectedId,
      };
    case profileActions.EDIT_VIEW:
      return {
        ...state,
        editView: action.view,
      };
    default:
      return state;
  }
}

export { profile };
