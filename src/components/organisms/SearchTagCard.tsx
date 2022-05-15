import React from 'react'
import { tagDatas } from '../../../lib/datas'
import { Paper } from '../atoms'
import { LinkList, TitleInPaper } from '../molecules'

const SearchTagCard = () => {
  return (
    <Paper padding='40px 50px'>
      <TitleInPaper text="タグから検索"/>
      <LinkList img="tag.png" links={tagDatas}/>
    </Paper>
  )
}

export default SearchTagCard