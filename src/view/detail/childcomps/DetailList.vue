<!--  -->
<template>
  <div class="wrap" v-if="Info.creator">
    <div class="head">
      <div class="image">
        <img :src="Info.coverImgUrl" alt="" />
      </div>
      <div class="word">
        <h3>{{ Info.name }}</h3>
        <p>创建者:{{ Info.creator.nickname }}</p>
        标签:<span v-for="item in Info.tags">{{ item }}</span>
        <p>{{ Info.description }}</p>
      </div>
    </div>

    <div class="f-box">
      <div class="item">
        <detail-list-item
          v-for="(item, index) in Info.tracks"
          :Info="item"
          :index="index"
        />
      </div>

      <div class="box-right">
        <div class="hot-c">相关评论</div>
        <div v-for="(item, index) in comWord" class="boxx">
          <div class="name">{{ item.user.nickname }} :</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailListItem from "./DetailListItem";

export default {
  name: "DetailList",
  data() {
    return {};
  },
  props: {
    Info: {
      type: Object,
      default() {
        return {};
      },
    },
    comWord: {
      type: Array,
      default() {},
    },
  },

  components: {
    DetailListItem,
  },

  computed: {},

  created() {
    console.log(this.comWord);
  },

  methods: {},
};
</script>
<style scoped>
.wrap {
  box-sizing: border-box;
  height: 800px;
}

.head {
  padding-left: 150px;
  padding-top: 50px;
  display: flex;
}

.image img {
  width: 200px;
  height: 200px;
  box-shadow: 8px 8px 1px #cbcbcb;
  margin-right: 30px;
}

.word span {
  margin: 0 10px;
}

.f-box {
  display: flex;
}

.item {
  margin-top: 30px;
  margin-left: 30px;
}
.boxx {
  display: flex;
  padding: 10px;
}
.boxx_inner {
  display: flex;
}
.box-right {
  width: 490px;
}

.name {
  color: #477acc;
}
.content {
  margin-left: 20px;
}
.hot-c {
  font-size: 20px;
  margin: 20px 0;
}
</style>