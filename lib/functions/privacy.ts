import { Blog } from "../type"

export const returnPrivacyPoricyData = (articles: Blog[]) => {
  return (
    articles.find(article => {
      return article.privacy;
    })
  )
}