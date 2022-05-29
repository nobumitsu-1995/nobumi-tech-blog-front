import { Tag } from "../type"

export const returnTagDatas = (datas: Tag[]) => {
  return (
    datas.map(data => {
      return {
        text: data.name,
        link: `/search?tag=${data.link}`
      }
    })
  )
}