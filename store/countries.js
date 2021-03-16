export const state = () => ({
  countries: []
});

export const mutations = {
  setCountries(state, value) {
    state.countries = value;
  }
};
