import actions from './actions';
import Getters from './getters';
import mutations from './mutations';
import state from './states';

const List = {
    namespaced: true,
    actions,
    Getters,
    mutations,
    state
}

export default List;
