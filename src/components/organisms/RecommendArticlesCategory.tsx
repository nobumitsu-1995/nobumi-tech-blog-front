import React from 'react'
import { RecommendArticleCategory } from '../../../lib/type'
import { GapColumnList } from '../../styles/styled-components'
import { Paper, Text } from '../atoms'
import { AccordionBody } from '../molecules'
import Accordion from './Accordion'

type Props = {
  backendArticles: RecommendArticleCategory[];
  frontendArticles: RecommendArticleCategory[];
}

const RecommendArticlesCategory: React.FC<Props> = ({ ...props }) => {
  return (
    <Paper borderColor="#E63946" padding="25px 20px">
			<Text color="#271E16" fontSize="20px" fontWeight="bold" text="カテゴリ おすすめの記事" margin="0 0 35px" />
      <GapColumnList gap='25px'>
        <Accordion id={0} text="FRONTEND">
          <AccordionBody articles={props.backendArticles} />
        </Accordion>
        <Accordion id={0} text="BACKEND">
          <AccordionBody articles={props.backendArticles} />
        </Accordion>
      </GapColumnList>
    </Paper>
  )
}

export default RecommendArticlesCategory