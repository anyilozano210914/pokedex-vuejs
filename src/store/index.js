import Vue from "vue";
import Vuex from 'vuex';
import Home from './Home';
import List from './List';
import Favorites from './Favorites';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Home,
        List,
        Favorites
    },
    plugins: [createPersistedState()],
});

export default Store;