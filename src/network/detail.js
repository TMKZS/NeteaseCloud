import {request} from './request'

export function getDetailRecommend(id){
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}