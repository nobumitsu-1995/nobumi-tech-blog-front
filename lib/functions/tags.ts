import { Tag } from "../type"

export const returnTagDatas = (datas: Tag[]) => {
  return (
    datas.map(data => {
      return {
        text: data.name,
        link: `/search/result?tag=${data.link}`
      }
    })
  )
}