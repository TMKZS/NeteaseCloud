import {request} from './request'

export function getSingerSort(type) {
  return request({
    url: "/toplist/artist",
    params: {
      type
    }
  })
}