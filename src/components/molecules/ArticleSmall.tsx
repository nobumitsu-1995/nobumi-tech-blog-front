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
`;

const ArticleSmall: React.FC<Props> = ({ article }) => {
  return (
    <Card>
      <Link href={`/artice/${article.id}`}>
        <a>
          <Image src={article.img} alt={article.title} width="1100" height="500"/>
          <Text text={article.title} margin="15px 0"/>
          <LinkList img="tag.png" links={tagDatas} />
        </a>
      </Link>
    </Card>
  )
}

export default ArticleSmall