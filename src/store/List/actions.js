import axios from "axios"

export default {
    getPokemons({ commit }) {
        commit('showLoading')
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                commit('hideLoading')
                commit('setPokemons', res.data.results)
            }).catch((error) => {
                commit('hideLoading')
                console.log(error)
            })
    },

    searchPokemon({commit}, data){
        commit('showLoading')
        axios.get(data.url)
        .then((res) => {
            commit('hideLoading')
            res.data.isFavorite = data.isFavorite;
            commit('setSearchPokemon', res.data)
        }).catch((error) => {
            commit('hideLoading')
                console.log(error)
        })
    },

    searchPokemons({state, commit},data) {
        let favorites = state.pokemons.filter(favorite => favorite.name.includes(data));
        console.log(data)
        commit('setPokemonsList', favorites)
    }
}