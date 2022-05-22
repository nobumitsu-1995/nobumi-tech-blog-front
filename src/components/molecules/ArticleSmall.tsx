import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { tagDatas } from '../../../lib/datas'
import { Article } from '../../../lib/type'
import { Text } from '../atoms'
import LinkList from './LinkList'

type Props = {
  article: Article
}

const Card = styled.article`
  border: 1px solid #CCC;
  padding: 10px 10px 15px;

  &:hover {
    box-shadow: 0 0 5px 3px #00000029;
    opacity: 0.7;
		transition-duration: 0.3s;
  }
`;

const ArticleSmall: React.FC<Props> = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a>
        <Card>
          <Image src={`/${article.img}`} alt={article.title} width="1100" height="500"/>
          <Text text={article.title} textalign="center" margin="15px 0"/>
          <LinkList fontSize='12px' img="tag.png" links={tagDatas} />
        </Card>
      </a>
    </Link>
  )
}

export default ArticleSmall