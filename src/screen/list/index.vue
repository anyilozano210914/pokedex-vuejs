<template>
  <div class="list">
    <b-container>
      <b-col md="12" class="search">
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
      <b-col md="12" class="mt-5">
        <div v-for="(item, index) in pokemons" :key="index">
          <Pokemon :pokemon="item" @searchPokemon="pokemon" />
        </div>
      </b-col>
      <b-modal id="detalle" centered title="BootstrapVue" v-if="pokemonModal != null">
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
              <b-btn class="copy">Share to my friends</b-btn>
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
    </b-container>
  </div>
</template>
<script>
import Pokemon from "./components/pokemon.vue";
export default {
  components: {
    Pokemon,
  },
  data: () => ({
    search: ''
  }),
  async created() {
    await this.$store.dispatch("List/getPokemons");
    this.$store.dispatch("List/searchPokemons", this.search);
  },
  methods: {
    pokemon(pokemon) {
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
          this.$bvModal.show();
        });
    },

    searchPokemons() {
      this.$store.dispatch("List/searchPokemons", this.search);
    },
  },
  computed: {
    pokemons() {
      return this.$store.state.List.searchPokemons;
    },

    pokemonModal() {
      return this.$store.state.List.pokemonModal;
    },
  },
};
</script>