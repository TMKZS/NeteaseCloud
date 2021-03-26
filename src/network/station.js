import {request} from "./request"

export function getStation(){
  return request({
    url: "/dj/hot"
  })
}