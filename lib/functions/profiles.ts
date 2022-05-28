import { Blog } from "../type"

  export const returnUserData = (articles: Blog[]) => {
    return (
      articles.find(article => {
        return article.userinfo;
      })
    )
  }