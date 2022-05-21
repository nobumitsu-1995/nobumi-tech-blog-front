import React from 'react'
import { GapColumnList } from '../../styles/styled-components'
import { RelativeArticles } from '../organisms'

const Article = () => {
  return (
    <GapColumnList gap="30px">
      <RelativeArticles />
    </GapColumnList>
  )
}

export default Article