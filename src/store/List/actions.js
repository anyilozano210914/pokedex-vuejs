import axios from "axios"

export default {
    getPokemons({ commit }) {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                commit('setPokemons', res.data.results)
            }).catch((error) => {
                console.log(error)
            })
    },

    searchPokemon({commit}, data){
        axios.get(data.url)
        .then((res) => {
            res.data.isFavorite = data.isFavorite;
            commit('setSearchPokemon', res.data)
        })
    },

    searchPokemons({state, commit},data) {
        let favorites = state.pokemons.filter(favorite => favorite.name.includes(data));
        console.log(data)
        commit('setPokemonsList', favorites)
    }
}