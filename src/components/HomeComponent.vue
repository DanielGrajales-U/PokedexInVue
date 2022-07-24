<template>
  <section class="pokemons">  
    <CardsComponent v-for="pokemon in pokemonsPaginados" :key="pokemon.id" :pokemon="pokemon"></CardsComponent>
    <div class="navigation">
      <ul class="pagination">
        <li v-for="pagina in 12" @click="pagination(pagina)" :key="pagina"><a>{{pagina}}</a></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import CardsComponent from './CardsComponent.vue'

import {storeToRefs} from 'pinia'
import {usePokemonStore} from '../stores/request'
const store = usePokemonStore();

const {pokemonsPaginados} = storeToRefs(store)
const {fetchPokemons,pagination,getLength,getPokemons} = store
fetchPokemons();

</script>

<style>

</style>