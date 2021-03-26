import {request} from "./request"

export function getSingerInfo(id){
  return request({
    url: "/artists",
    params: {
      id
    }
  })
}