<template>
  <section class="pokemons">  
    <div class="container">
      <div class="loading" v-if="loading">
        <div class="load ld"></div>
        <label class="ld label">Loading Pokemons...</label>
      </div>
    </div>
    <template v-if="loading ===false">
      <div class="navigation">
        <ul class="pagination">
          <li v-for="pagina in 12" @click="pagination(pagina)" :key="pagina"><a>{{pagina}}</a></li>
        </ul>
      </div>
      <CardsComponent v-for="pokemon in pokemonsPaginados" :key="pokemon.id" :pokemon="pokemon"></CardsComponent>
      <div class="navigation">
        <ul class="pagination">
          <li v-for="pagina in 12" @click="pagination(pagina)" :key="pagina"><a>{{pagina}}</a></li>
        </ul>
      </div>
    </template>
  </section>   
</template>

<script setup>
import CardsComponent from './CardsComponent.vue'
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {usePokemonStore} from '../stores/request'
const store = usePokemonStore();

const {pokemonsPaginados} = storeToRefs(store)
const {fetchPokemons,pagination,getLength,getPokemons} = store



const loading = ref(true)
async function prefetch(){
  await fetchPokemons();
  loading.value = false
}
prefetch()
</script>

<style>

</style>