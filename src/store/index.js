import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    img: null,
    url: null,
    songer: null,
    songname: null,
    listSong: [],
    playState: false
  },
  mutations: {
    getImg(state,n){
      state.img = n
      // console.log(state.img);
    },
    getUrl(state,n){
      state.url = n
    },
    getSonger(state,n){
      state.songer = n
    },
    getSongName(state,n){
      state.songname = n
    },    
  },
  actions: {

  },
  getters: {

  }
})

export default store