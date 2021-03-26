import {request} from "./request"

export function getPlayList(){
  return request({
    url: "/top/playlist/highquality"
  })
}

export const playtype = [
  {content: "全部"},
  {content: "华语"},
  {content: "流行"},
  {content: "摇滚"},
  {content: "民谣"},
  {content: "电子"},
]