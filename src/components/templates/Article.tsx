import React from 'react'
import { GapColumnList } from '../../styles/styled-components'
import { ContactSNSCard, RelativeArticles } from '../organisms'

const Article = () => {
  return (
    <GapColumnList gap="30px">
      <ContactSNSCard />
      <RelativeArticles />
    </GapColumnList>
  )
}

export default Article