import React from 'react'
import { articleDatas } from '../../../lib/datas'
import { GapColumnList } from '../../styles/styled-components'
import { ArticleCard, ContactSNSCard, RelativeArticles } from '../organisms'

const Article = () => {
  return (
    <GapColumnList gap="30px">
      <ArticleCard {...articleDatas[0]} />
      <ContactSNSCard />
      <RelativeArticles />
    </GapColumnList>
  )
}

export default Article