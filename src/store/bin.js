const binState = {
  items: {},
};

const actions = {
  makePurchase({ commit, state }) {
    const result = JSON.stringify(state);
    console.info(result);
    commit('setItems', {});
  },
  refusePurchase({ commit }) {
    commit('setItems', {});
  },
};

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  addItem(state, item) {
    const { id, count } = item;

    const newCount = state.items[id]?.count
      ? state.items[id].count + count
      : count;
    state.items[id] = { ...item, count: newCount };
  },
  removeItem(state, id) {
    delete state.items[id];
  },
};

const getters = {
  getItems(state) {
    return state.items;
  },
  getItemsCount(state) {
    return Object.values(state.items).reduce(
      (acc, { count }) => acc + count,
      0
    );
  },
};

const store = {
  namespaced: true,
  state: binState,
  actions,
  mutations,
  getters,
};

export default store;
