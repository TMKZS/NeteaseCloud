import {request} from "./request"

export function getLogin(code){
  return request({
    url:"/captcha/sent",
    params: {
      phone:code
    }
  })
}

export function getTest(phone, captcha){
  return request({
    url:"/captcha/verify",
    params: {
      phone,
      captcha
    }
  })
}