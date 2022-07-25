import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemons',
  state: () => ({
    pokemons:[],
    proxi: [],
    elementosPorPagina:100,
    pokemonsPaginados: []
  }),
  getters: {
    getLength(){
      return this.pokemons.length
    },
    getPokemons(){
      return this.pokemons
    },
    getName(state){
      return this.pokemons.forEach(pokemon => pokemon.name)
    },

  },
  actions: {
    async fetchPokemons(){
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      const rest = await fetch(url).then(res => res.json()).then(p => p.results)
      
      this.proxi = rest
      for(let i = 0; i < this.proxi.length; i++){
        const urlInfo = this.proxi[i].url
        const info = await fetch(urlInfo).then(x=>x.json()).then(p => {
          const id ={
            id:this.pokemons.length + 1
          }
          const type ={
            type:p.types.map(x=>x.type.name).join(',')
          } 
          const img = {
            img:p.sprites.front_default
          }
          const iterator =  this.proxi[i]
          this.pokemons.push(Object.assign(iterator,type,id,img))
        })
      }
      const inicial = this.pokemons.slice(0,100)
      for(let i = 0;i<inicial.length;i++){
        this.pokemonsPaginados.push(inicial[i])
      }
    },
    pagination(noPagina){
        this.pokemonsPaginados = []
        let ini = (noPagina * this.elementosPorPagina)-this.elementosPorPagina;
        let fin = (noPagina * this.elementosPorPagina);

        for(let i = ini;i<fin;i++){
          this.pokemonsPaginados.push(this.pokemons[i])
        }
        return this.pokemonsPaginados
      }
      
    }
})
