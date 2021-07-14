<template>
  <div>
    <div class="pokemon d-flex justify-content-between">
      <h3
        class="name-pokemon"
        v-b-modal.detalle
        @click.prevent="searchPokemon(pokemon)"
      >
        {{ pokemon.name }}
      </h3>
      <img
        src="/images/greyStar.png"
        @click.prevent="setfavorite(pokemon)"
        v-if="!bandera"
        alt=""
      />
      <img
        src="/images/amarillo.png"
        @click.prevent="deleteFavorite(pokemon)"
        v-else
        alt=""
      />
    </div>
    <!-- Modal -->
    <div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => {
        return {};
      },
      required: true,
    },
  },
  data: () => ({
    bandera: false,
  }),
  mounted(){
      let favorite = this.$store.state.Favorites.favorites.filter(item => item.name == this.pokemon.name);
      if(favorite.length > 0){
          this.bandera = true;
      }
  },
  methods: {
    searchPokemon(selectedPokemon) {
        this.$emit('searchPokemon', selectedPokemon);
    },
    setfavorite(item) {
      let filter = this.favorites.filter(
        (pokemon) => item.name == pokemon.name
      );
      if (filter > 0) {
        alert("El pokemon ya es tu favorito");
      } else {
        this.$store.commit("Favorites/setPokemonFavorite", item);
        this.bandera = !this.bandera
      }
    },
    deleteFavorite(pokemon){
        this.$store.state.Favorites.favorites.find((item, index) => {
            if(item.name == pokemon.name){
                this.$store.commit('Favorites/removeFavorites', index)
            }
        });
        this.bandera = false
    }
  },
  computed: {
    favorites() {
      return this.$store.state.Favorites.favorites;
    },
  },
};
</script>