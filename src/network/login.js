import {request} from "./request"

export function getLogin(code){
  return request({
    url:"/captcha/sent",
    params: {
      phone:code
    }
  })
}