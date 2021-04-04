import {request} from './request'

export function getPlay(id){
  return request({
    url: "/song/url",
    params: {
      id
    }
  })
}