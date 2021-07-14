<template>
    <div>
      <Loading v-show="loading" />
      <router-view></router-view>
      <div class="menu" v-if="show">
        <b-container>
          <b-row>
            <b-col md="6" sm="6" cols="6">
              <router-link to="/pokemons">
                <b-btn
                  class="all"
                  id="all"
                >
                  <img class="hambur" src="/images/hamburguer.png" alt="" />
                  All
                </b-btn>
              </router-link>
            </b-col>
            <b-col md="6" sm="6" cols="6">
              <router-link to="/favorites">
                <b-btn
                  class="favortite"
                  id="favortite"
                >
                  <img class="estre" src="/images/vector.png" alt="" />
                  Favorites
                </b-btn>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>

<script>
import Loading from "./components/loading/index.vue";
export default {
  name: "App",
  components: {
    Loading
  },
  data: () => ({
    window: window.location.pathname,
  }),
  updated() {
    this.getActive();
    const body = document.body;
    if (window.location.pathname != "/") {
      body.classList.add("body");
    } else {
      body.classList.remove("body");
    }
  },
  mounted() {
    this.getActive();
  },
  methods: {
    getActive() {
      let windows = window.location.pathname,
        all = document.getElementById("all"),
        favortite = document.getElementById("favortite");

      if (windows == "/pokemons") {
        all.classList.add("active");
        favortite.classList.remove("active");
      } else if (windows == "/favorites") {
        favortite.classList.add("active");
        all.classList.remove("active");
      }
    },
  },
  computed: {
    pokemons() {
      return this.$store;
    },
    loading(){
      return this.$store.state.Home.loading;
    },

    show(){
      return this.$route.name != 'Home'
    }
  },
};
</script>
