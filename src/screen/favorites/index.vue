<template>
  <div class="list">
    <b-container>
      <b-col md="12" class="mt-5">
        <b-input-group>
          <b-input-group-prepend class="d-flex align-items-center">
            <img src="/images/search.png" alt="" />
          </b-input-group-prepend>
          <b-form-input
            type="text"
            v-model="search"
            @input="searchPokemons"
          ></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="12" class="mt-5" v-if="favorites.length > 0">
        <div v-for="(pokemon, index) in favorites" :key="index">
          <div class="pokemon d-flex justify-content-between">
            <h3 class="name-pokemon" @click.prevent="openPokemon(pokemon)">
              {{ pokemon.name }}
            </h3>
            <img
              src="/images/amarillo.png"
              @click.prevent="deleteFavorite(pokemon)"
              alt=""
            />
          </div>
        </div>
      </b-col>
      <b-col md="12" class="mt-5" v-else>
        <b-col></b-col>
        <h1 class="text-center">Uh - Oh!</h1>
        <p class="text-center">You look lost on your journey!</p>
        <b-col class="d-flex justify-content-center" md="12">
          <router-link to="/pokemons">
            <b-btn class="button-start">Go back home</b-btn>
          </router-link>
        </b-col>
      </b-col>
    </b-container>
    <b-modal id="detalle" centered title="BootstrapVue">
      <template #modal-header>
        <b-col md="12" class="d-flex justify-content-center">
          <img :src="pokemonModal.sprites.front_default" alt="" />
        </b-col>
      </template>
      <b-container>
        <b-col md="12" class="modal-content-text">
          <span><b>Name: </b>{{ pokemonModal.name }}</span>
        </b-col>
        <b-col md="12" class="modal-content-text">
          <span><b>Weight: </b>{{ pokemonModal.weight }}</span>
        </b-col>
        <b-col md="12" class="modal-content-text">
          <span><b>Height: </b>{{ pokemonModal.height }}</span>
        </b-col>
        <b-col md="12" class="modal-content-text">
          <span><b>Types: </b></span>
          <ul>
            <li v-for="(item, index) in pokemonModal.types" :key="index">
              <span>{{ item.type.name }}</span>
            </li>
          </ul>
        </b-col>
      </b-container>
      <template #modal-footer>
        <b-row>
          <b-col md="6">
            <b-btn class="copy" @click="copy(pokemonModal)"
              >Share to my friends</b-btn
            >
          </b-col>
          <b-col md="6" class="d-flex justify-content-end">
            <img
              src="/images/amarillo.png"
              v-if="pokemonModal.isFavorite"
              alt=""
            />
            <img src="/images/greyStar.png" v-else alt="" />
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: "",
  }),
  created() {
    this.$store.dispatch("Favorites/searchPokemons", this.search);
  },
  methods: {
    searchPokemons() {
      this.$store.dispatch("Favorites/searchPokemons", this.search);
    },

    deleteFavorite(pokemon) {
      this.$store.state.Favorites.favorites.find((item, index) => {
        if (item.name == pokemon.name) {
          this.$store.commit("Favorites/removeFavorites", index);
        }
      });

      this.searchPokemons();
    },
    openPokemon(pokemon) {
      let favorite = false;
      const isFavorite = this.$store.state.Favorites.favorites.filter(
        (item) => item.name == pokemon.name
      );
      isFavorite.length > 0 ? (favorite = true) : (favorite = false);
      this.$store
        .dispatch("List/searchPokemon", {
          url: pokemon.url,
          isFavorite: favorite,
        })
        .then(() => {
          this.$bvModal.show("detalle");
        });
    },

    copy(pokemon) {
      let pokemonFinal = `Name: ${pokemon.name}, weight: ${pokemon.weight}, height: ${pokemon.height}`
      navigator.clipboard.writeText(JSON.stringify(pokemonFinal)).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    },
  },
  computed: {
    favorites() {
      return this.$store.state.Favorites.searchPokemons;
    },

    pokemonModal() {
      return this.$store.state.List.pokemonModal;
    },
  },
};
</script>