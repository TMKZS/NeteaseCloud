import {request} from './request'

export function getComment(id){
  return request({
    url: "/comment/playlist",
    params: {
      id
    }
  })
}