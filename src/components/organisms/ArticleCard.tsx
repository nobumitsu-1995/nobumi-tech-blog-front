import React from 'react'
import styled from "styled-components";
import Image from 'next/image';
import { Article as ArticleType } from "../../../lib/type";
import { ArticleContent } from '../../styles/styled-components';
import { Paper } from '../atoms'
import { ArticleTtl, LinkList } from '../molecules'
import { tagDatas } from '../../../lib/datas';

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
  margin-top: 40px;
`;

const ArticleCard: React.FC<ArticleType> = ({ ...props }) => {
  return (
    <Paper borderColor='#7C83CC'>
      <ArticleTtl
        date={props.date}
        title={props.title}
        category={props.category}
        link={`/category/${props.category}`}
      />
      <figure>
        <Image src={`/${props.img}`} alt={props.title} width="1100" height="500" />
      </figure>
      <ArticleContainer>
        <ArticleContent margin='0 0 40px'>
          <h1><span>01</span>H1 TITLE</h1><br />
          <h2>H2 TITLE</h2><br />
          <p className='point'>POINT TEXT</p><br />
          <p className='important'>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p><br />
          <span className='important'>Important Important Important Important Important Important</span>
        </ArticleContent>
        <LinkList img="tag.png" links={tagDatas} />
      </ArticleContainer>
    </Paper>
  )
}

export default ArticleCard