import { profile } from "./reducer";

function ascendingSort(profile1, profile2) {
  const name1 = profile1.name ? profile1.name.toUpperCase() : "~";
  const name2 = profile2.name ? profile2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const profileActions = {
  ADD_PROFILE: "ADD_PROFILE",
  EDIT_PROFILE: "EDIT_PROFILE",
  DELETE__PROFILE: "DELETE__PROFILE",
  CHANGE_PROFILE: "CHANGE_PROFILE",
  EDIT_VIEW: "EDIT_VIEW",
  changeContact: (id) => ({
    type: profileActions.CHANGE_PROFILE,
    id,
  }),
  addContact: () => {
    const newContact = {
      id: new Date(),
      firstName: "",
      avatar: profile[new Date() % 10].avatar,
      LastName: "",
      mobile: "",
      home: "",
      name: "",
      company: "",
      work: "",
      note: "",
    };
    return (dispatch, getState) => {
      dispatch({
        type: profileActions.ADD_PROFILE,
        profile: [...getState().Contacts.profile, newContact],
        selectedId: newContact.id,
      });
    };
  },
  editContact: (newContact) => {
    return (dispatch, getState) => {
      const profile = getState().Contacts.profile;
      const newContacts = [];
      profile.forEach((profile) => {
        if (profile.id === newContact.id) {
          newContacts.push(newContact);
        } else {
          newContacts.push(profile);
        }
      });
      dispatch({
        type: profileActions.EDIT_PROFILE,
        profile: newContacts.sort(ascendingSort),
      });
    };
  },
  deleteContact: (id) => {
    return (dispatch, getState) => {
      const profile = getState().Contacts.profile;
      const seectedId = getState().Contacts.seectedId;
      const newContacts = [];
      profile.forEach((profile) => {
        if (profile.id === id) {
        } else {
          newContacts.push(profile);
        }
      });
      dispatch({
        type: profileActions.DELETE__PROFILE,
        profile: newContacts,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: profileActions.EDIT_VIEW,
    view,
  }),
};
export default profileActions;
