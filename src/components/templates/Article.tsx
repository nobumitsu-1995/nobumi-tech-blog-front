import React from 'react'
import { articleDatas } from '../../../lib/datas'
import { GapColumnList } from '../../styles/styled-components'
import { ArticleCard, ContactSNSCard, RelativeArticles } from '../organisms'

const Article = () => {
  return (
    <GapColumnList gap="30px">
      <li><ArticleCard {...articleDatas[0]} /></li>
      <li><ContactSNSCard /></li>
      <li><RelativeArticles /></li>
    </GapColumnList>
  )
}

export default Article