import {request} from "./request"

export function getRegister(captcha, phone, password, nickname){
  return request({
    url:"/register/cellphone",
    params: {
      captcha,
      phone,
      password,
      nickname,
    }
  })
}