const binState = {
  items: {},
};

const mutations = {
  addItem(state, item) {
    const { id, count } = item;

    state.items[id] = count;
  },
};

const getters = {
  getItems(state) {
    return state.items;
  },
  getItemsCount(state) {
    return Object.values(state.items).reduce((acc, value) => acc + value, 0);
  },
};

const store = {
  namespaced: true,
  state: binState,
  mutations,
  getters,
};

export default store;
