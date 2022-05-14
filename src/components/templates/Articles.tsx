import React from 'react'
import { Article as ArticleType } from '../../../lib/type'
import { Article } from '../molecules'

const Articles: React.FC<ArticleType[]> = ( articles ) => {
  return (
    <ul>
      {articles.map( article => {
        return (
          <li key={article.id}>
            <article>
              <Article {...article} />
            </article>
          </li>
        )
      } )}
    </ul>
  )
}

export default Articles