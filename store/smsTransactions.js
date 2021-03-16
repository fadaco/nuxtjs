export const state = () => ({
  transactions: []
});

export const mutations = {
  setBusinessTransaction(state, value) {
    state.transactions = value;
  }
};

