<template>
  <div class="cards">
    <header><img :src="`${(pokemon.img === null ? this.pokemon.img = '/src/assets/pokeball.png': pokemon.img)}`"></header>
    <div class="body">
      <h1>{{pokemon.name}}</h1>
      <h4>{{pokemon.type}}</h4>
      <p>#{{pokemon.id}}</p>
    </div>
  </div>
</template>


<script setup>
defineProps({
  pokemon: {
    id:Number,
    name:String,
    type:String || Array,
    img:String
  },
});

</script>

<style>

</style>