export const CATALOG_STORE_NAME = 'catalog';

const catalogState = {
  catalogItems: [],
};

const actions = {
  getCatalogItems({ commit }) {
    return fetch('/catalog.json')
      .then((raw) => raw.json())
      .then((data) => {
        commit('setCatalogItems', data);
      });
  },
};

const mutations = {
  setCatalogItems(state, items) {
    state.catalogItems = items;
  },
};

const getters = {
  getCatalogItems(state) {
    return state.catalogItems;
  },
};

const store = {
  namespaced: true,
  state: catalogState,
  actions,
  mutations,
  getters,
};

export default store;
