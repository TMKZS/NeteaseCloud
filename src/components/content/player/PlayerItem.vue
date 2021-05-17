<!--  -->
<template>
  <div>
    <div class="container">
      <div class="image">
        <img :src="this.$store.state.img" alt="">
      </div>
      <div class="info">
        <p>
          {{this.$store.state.songname}}
        </p>
        <p>
          {{this.$store.state.songer}}
        </p>
      </div>
      <div class="progress-container" id="progress-container" @click="setProgress" ref="compref">
        <div class="progress" id="progress"></div>
      </div>
      <audio loop  @timeupdate="updateProgress" :src="this.$store.state.url" id="audio"></audio>

      <div class="navigation">
        <button @click="prevBtn()" id="prev" class="action-btn VO">
          <i class="fa fa-backward"></i>
        </button>
        <button @click="playBtn()" id="play" class="action-btn action-btn-big VO">
          <i class="fa fa-play"></i>
        </button>
        <button @click="nextBtn()" id="next" class="action-btn VO">
          <i class="fa fa-forward"></i>
        </button>
      </div>
      <div>
        <button id="bars" class="action-bars">
          <div class="list">
            <play-list :info = 'data'/>
          </div>
          <i class="fa fa-bars" @click="hid"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PlayList from './PlayList'

import {getNewsong} from 'network/recommend' 
export default {
  name:'PlayerItem',
  data () {
    return {
      playState: this.$store.state.playState,
      stat: false,
      data: [],
      playList:[
      {
        img: 'http://p1.music.126.net/EepVxZ_7Z0qAiW_UYcC7EA==/109951165954048759.jpg',
        songer:'许嵩',
        songname:'庞贝',
        listSong:'http://m701.music.126.net/20210515133240/9a4a536b0dceb1db36b0d4d042ac8442/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8918108324/31c7/dcbb/b096/80cca102e48fc2ebe07d39453dd5df72.mp3'
      },
      {
        img: 'http://p1.music.126.net/2cvCX2N7Dci6z4cf7uy2eA==/109951165975305914.jpg',
        songer:'Nicki Minaj',
        songname:'Seeing Green',
        listSong:'http://m701.music.126.net/20210515133506/c1b39349e2f00f287bda16804c87c3bc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8928663901/2bf8/4f81/cff9/f28d5e93c4f64baf5016e2277e82c607.mp3'
      },
      {
        img: 'http://p1.music.126.net/7X015UKnsi2Fpv2j__OE2A==/109951165975290692.jpg',
        songer:'Katy Perry',
        songname:'Electric',
        listSong:'http://m701.music.126.net/20210515133636/4a10be8adc4d939f5432f02fac0d7bbe/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8928530392/633e/455d/d309/006bac160ad6a6035318056b1164c90a.mp3'
      },
      {
        img: 'http://p1.music.126.net/m6HMy0iIynI3pwWKKca9IQ==/109951165972756324.jpg',
        songer:'黄明昊 (Justin)',
        songname:'梦终归',
        listSong:'http://m801.music.126.net/20210515133735/d01efcce6972999c4fcd7a480f71c90b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8913804021/8195/4b4a/928d/de128b4fd21811842ce20eaec0af5d67.mp3'
      },
      {
        img: 'http://p1.music.126.net/hJ6o7-lqUEb8xYep1UVpfA==/109951165946517792.jpg',
        songer:'Alan Walker',
        songname:'Believers',
        listSong:'http://m701.music.126.net/20210515133811/107942066081227a829b722a96bdaf74/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8777519116/76cf/ba64/0d69/e9d477c814ea9093823fbfce8298328e.mp3'
      },
      {
        img: 'http://p1.music.126.net/NNafYSOavRKvC4KQGdabqw==/109951165967350544.jpg',
        songer:'Martin Garrix',
        songname:'We Are The People',
        listSong: 'http://m801.music.126.net/20210515133854/133a6afa1f809fbed77abc62c3e90f85/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8877008645/8beb/550d/5689/84a6281cbd0ba47dcf8c2ae7e1413ff2.mp3'
      },
      {
        img: 'http://p1.music.126.net/OQ1kZuqvpPnhVsY5c7brUw==/109951165972850435.jpg',
        songer:'宋雨琦',
        songname:'Giant',
        listSong: 'http://m801.music.126.net/20210515133943/cb775131db834f952b045c1755600c6d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8916044862/8ece/8719/256d/fc444179ee14d8815c6645f99cf30cc1.mp3'
      },
      {
        img: 'http://p1.music.126.net/v9bgpngH54SR73BJRkEZjA==/109951165965549383.jpg',
        songer:'伯贤',
        songname:'Hurt',
        listSong: 'http://m801.music.126.net/20210515134023/77f40f6d97a43c49e26ddaaba91e67c3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8865685155/d2b1/6c47/5208/43bd5f6375053a13cca295696a128b84.mp3'
      },
      {
        img: 'http://p1.music.126.net/2mVBh3L3FN6cypBmID_irA==/109951165959478331.jpg',
        songer:'鞠婧祎',
        songname:'倒流',
        listSong: 'http://m801.music.126.net/20210515134100/79f79d616699bc3d326489cebf92b49e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8836330679/a973/0857/fa0e/4970b2537e95436d46f3b2a193de5445.mp3'
      }
      ],
      songIndex: 8,
    };
  },

  components: {
    PlayList
  },

  computed: {},

  created(){
    this.getNewsong()
  },

  methods: { 
    //播放键 
    playBtn(){
      const playBtn = document.getElementById("play");

      this.getVideo()

      if(this.playState){
        playBtn.querySelector("i.fa").classList.add("fa-play");
        playBtn.querySelector("i.fa").classList.remove("fa-pause");
        audio.pause();
      }else{
        playBtn.querySelector("i.fa").classList.remove("fa-play");
        playBtn.querySelector("i.fa").classList.add("fa-pause");
        audio.play();
      }
      this.playState = !this.playState
    },
    //上一首歌
    prevBtn(){
      // console.log(this.playList[this.songIndex])
      this.getVideo()
      this.img = this.playList[this.songIndex].img
      this.songer = this.playList[this.songIndex].songer
      this.songname = this.playList[this.songIndex].songname
      this.url = this.playList[this.songIndex].listSong

      this.$store.commit('getImg',this.img)
      this.$store.commit('getUrl',this.url)
      this.$store.commit('getSonger',this.songer)
      this.$store.commit('getSongName',this.songname)
      
      if(this.songIndex == 0){
        this.songIndex = 8
      }else{
        this.songIndex--
      }
    },
    nextBtn(){
      this.getVideo()
      this.img = this.playList[this.songIndex].img
      this.songer = this.playList[this.songIndex].songer
      this.songname = this.playList[this.songIndex].songname
      this.url = this.playList[this.songIndex].listSong

      this.$store.commit('getImg',this.img)
      this.$store.commit('getUrl',this.url)
      this.$store.commit('getSonger',this.songer)
      this.$store.commit('getSongName',this.songname)
      
      if(this.songIndex == 8){
        this.songIndex = 0
      }else{
        this.songIndex++
      }
    },
    //下一首歌
    //设置进度条
    updateProgress(e){
      const progress = document.getElementById("progress")

      // console.log(e.srcElement)
      const {duration, currentTime} = e.srcElement
      // console.log(duration, currentTime)
      const progressPercent = (currentTime/duration)*100;
      progress.style.width = `${progressPercent}%`
    },
    //点击进度条
    setProgress(e){
      const audio = document.getElementById("audio");

      const width = 950;
      console.log(width);
      const clickX = e.offsetX;
      // console.log(clickX);
      const duration = audio.duration;
      // console.log(duration);
      audio.currentTime = (clickX / width) * duration
    },
    //隐藏列表
    hid(){
      // let stat = false;
      if(this.stat == false) {
        document.querySelector('.list').style.display = 'block'
        this.stat = !this.stat
      }else{
        document.querySelector('.list').style.display = 'none'
        this.stat = !this.stat
      }
      
    },
    //设置音量
    getVideo(){
          var bb = document.getElementById('play').volume =0.2;
            console.log(bb)
    },

    //请求数据
    getNewsong(){
      getNewsong().then(res => {
        this.data = res.data.result
        console.log(res)
      })
    }
  }
}


</script>
<style scoped>
 .container{
    width: 100%;
    height: 72px;
    background-color: #f2f2f2;

    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
  }
  .image img{
    width: 60px;
    height: 60px;
    padding-left: 30px;
  }

  .info{
    padding-left: 20px;
  }

  .navigation button{
    /* 点击时出现的边框高亮设置为0 */
    outline: 0;
    /* 盒子本身的边框 */
    border: 0px;
    padding-left: 30px;
  }

  .action-bars {
    /* 点击时出现的边框高亮设置为0 */
    outline: 0;
    /* 盒子本身的边框 */
    width: 100px;
    border: 0px;
    padding-left: 30px;
    position: relative;
  }

  .progress-container {
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  height: 6px;
  width: 62%;
  margin-left: 30px;
}

  .progress {
  background-color: #fe8daa;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
  .list {
    border: 1px solid red;
    background-color: #fff;
    float: left;
    position: absolute;
    bottom: 50px;
    right: -40px;
    height: 320px;
    width: 320px;
    display: none;
  }
</style>