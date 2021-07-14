export default {
    setPokemonFavorite(state, value){
        state.favorites.push(value);
    },

    setSearchPokemons(state, value){
        state.searchPokemons = value;
    },

    removeFavorites(state, value){
        state.favorites.splice(value, 1);
    }
}

