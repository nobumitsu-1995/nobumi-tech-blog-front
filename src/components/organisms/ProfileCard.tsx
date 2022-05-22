import React from 'react'
import Image from 'next/image'
import styled from "styled-components";
import { ArticleContent } from '../../styles/styled-components'
import { Paper } from '../atoms'
import { ArticleTtl } from '../molecules'

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
  margin-top: 40px;
`;

const ProfileCard = () => {
  return (
    <Paper borderColor='#7C83CC'>
      <ArticleTtl 
        date={new Date()}
        title="nobumitsuについて"
      />
      <figure>
        <Image src="/sample.png" alt="nobumitsuについて" width="1100" height="500" />
      </figure>
      <ArticleContainer>
        <ArticleContent>
        <h1><span>01</span>H1 TITLE</h1><br />
            <h2>H2 TITLE</h2><br />
            <p className='point'>POINT TEXT</p><br />
            <p className='important'>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p><br />
        </ArticleContent>
      </ArticleContainer>
    </Paper>
  )
}

export default ProfileCard