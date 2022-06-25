import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

// Create a new store instance.
const store = createStore({
  state () {
    return {
      favoriteList: []
    }
  },
  mutations: {
    addInFavoriteList (state, property) {
      state.favoriteList.push(property)
    },
    removeFromFavoriteList (state, propertyCod) {
      state.favoriteList.splice(state.favoriteList.indexOf(state.favoriteList.find(property => property.cod === propertyCod)), 1)
    }
  },
  getters: {
    isFavorited: (state) => (propertyCod) => !!state.favoriteList.find(property => property.cod === propertyCod),
    getFavoritesList: (state) => state.favoriteList,
    favoriteListLength: (state) => state.favoriteList.length
  },
  plugins: [vuexLocal.plugin]
})

export {
  store
}
