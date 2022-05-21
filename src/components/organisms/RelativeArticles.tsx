import React from 'react'
import styled from 'styled-components'
import { articleDatas } from '../../../lib/datas'
import { Paper } from '../atoms'
import { ArticleSmall, TitleInPaper } from '../molecules'

const Grid = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`

const RelativeArticles = () => {
  return (
    <Paper padding='50px'>
      <TitleInPaper text='関連記事'/>
      <Grid>
        {articleDatas.map(data => {
          return (
            <li key={data.title}>
              <ArticleSmall article={data} />
            </li>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default RelativeArticles