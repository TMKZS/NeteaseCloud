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
      <audio @timeupdate="updateProgress" :src="this.$store.state.url" id="audio"></audio>

      <div class="navigation">
        <button id="prev" class="action-btn">
          <i class="fa fa-backward"></i>
        </button>
        <button @click="playBtn()" id="play" class="action-btn action-btn-big">
          <i class="fa fa-play"></i>
        </button>
        <button id="next" class="action-btn">
          <i class="fa fa-forward"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PlayerItem',
  data () {
    return {
      playState: this.$store.state.playState
    };
  },

  components: {},

  computed: { },
  methods: { 
    //播放键 
    playBtn(){
      const playBtn = document.getElementById("play");
      

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

      const width = 1050;
      console.log(width);
      const clickX = e.offsetX;
      // console.log(clickX);
      const duration = audio.duration;
      // console.log(duration);
      audio.currentTime = (clickX / width) * duration
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

  .progress-container {
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 6px;
  width: 70%;
  margin-left: 30px;
}

  .progress {
  background-color: #fe8daa;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
</style>