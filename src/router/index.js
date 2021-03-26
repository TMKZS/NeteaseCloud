import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import('../view/recommend/Recommend')
const Chart = () => import('../view/chart/Chart')
const Playlist = () => import('../view/playlist/Playlist')
const Station = () => import('../view/station/Station')
const Singer = () => import('../view/singer/Singer')
const Detail = () => import('../view/detail/Detail')
const Singerinfo = () => import('../view/singerinfo/SingerInfo')
const Radio = () => import('../view/radio/Radio')


//安装插件 
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/playlist',
    component: Playlist
  },
  {
    path: '/station',
    component: Station
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/singerinfo',
    component: Singerinfo
  },
  {
    path: '/radio',
    component: Radio
  },
]

//创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router