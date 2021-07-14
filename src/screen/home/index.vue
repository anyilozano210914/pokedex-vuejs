<template>
  <div>
    <b-container>
      <b-col
        md="12"
        class="d-flex justify-content-center align-items-center mt-4"
      >
        <img src="/images/Pikachu.png" class="pikachu" />
      </b-col>
      <b-col md="12" class="mt-5">
        <h1 class="text-center">Welcome to Pokédex</h1>
      </b-col>
      <b-col md="12" class="mt-5">
        <h5 class="text-center">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool <br />
          to Trainers in the Pokémon world.
        </h5>
      </b-col>
      <b-col
        md="12"
        class="mt-5 d-flex justify-content-center align-items-center"
      >
        <router-link to="/pokemons">
          <b-btn class="button-start"> Get started </b-btn>
        </router-link>
      </b-col>
    </b-container>
  </div>
</template>
<script>
export default {};
</script>