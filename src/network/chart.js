import {request} from "./request"

export function getChart(){
  return request({
    url: "/toplist"
  })
}