import actions from './actions';
import Getters from './getters';
import mutations from './mutations';
import state from './states';

const Favorites = {
    namespaced: true,
    actions,
    Getters,
    mutations,
    state
}

export default Favorites;
