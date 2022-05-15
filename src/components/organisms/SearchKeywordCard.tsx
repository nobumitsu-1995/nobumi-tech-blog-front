import Image from 'next/image'
import React from 'react'
import { Paper } from '../atoms'
import { IconInput, TitleInPaper } from '../molecules'

const SearchKeywordCard = () => {
  return (
    <Paper borderColor='#7C83CC' padding='40px 50px'>
      <TitleInPaper text="キーワードで検索"/>
      <IconInput
        icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
				onClick={() => console.log("clicked!")}
				placeholder="search..."
      />
    </Paper>
  )
}

export default SearchKeywordCard