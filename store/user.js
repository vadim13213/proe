export const state = () => ({
  isAuthorised: false,
  id: null,
  email: "",
});

export const getters = {
  getIsAuthorised: (state) => state.isAuthorised,
  getId: (state) => state.id,
  getEmail: (state) => state.email,
};

export const mutations = {
  updateIsAuthorised(state, newValue) {
    state.isAuthorised = newValue;
  },
  updateId(state, newValue) {
    state.id = newValue;
  },
  updateEmail(state, newValue) {
    state.email = newValue;
  },
};
