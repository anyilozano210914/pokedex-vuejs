// import axios from "axios"

export default {
    searchPokemons({state, commit},data) {
        let favorites = state.favorites.filter(favorite => favorite.name.includes(data));
        commit('setSearchPokemons', favorites);
    }
}