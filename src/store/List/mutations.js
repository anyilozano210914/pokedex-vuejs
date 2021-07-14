export default {
    setSearch(state, value){
        state.search = value;
    },

    setPokemons(state, data) {
        state.pokemons = data;
    },

    setSearchPokemon(state, value){
        state.pokemonModal = value;
    },

    setPokemonsList(state, value){
        state.searchPokemons = value;
    },
}