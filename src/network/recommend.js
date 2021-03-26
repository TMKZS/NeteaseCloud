import {request} from './request'

//登录状态
// export function getStatus(){
//   request({
//     url:'/login/status'
//   })
// }


export function getRecommendMultidata(){
  return request({
    url: '/banner'
  })
}

export function getPopular(){
  return request({
    url: '/top/playlist?limit=21'
  })
}

export function getRecommendSong(){
  return request({
    url: '/personalized?limit=10'
  })
}

export function getNewsong(){
  return request({
    url: '/personalized/newsong'
  })
}

// export function getSongUrl(id){
//   return request({
//     url: '/song/url',
//     params: id
//   })
// }