import React from 'react'
import styled from 'styled-components'
import { RecommendArticle, RecommendArticleCategory, UserData } from '../../../lib/type'
import { RecommendArticles, RecommendArticlesCategory, SearchCard, UserCard } from '../organisms'

type Props = {
  userData: UserData;
  recommendArticles: RecommendArticle[];
  recommendBackendArticles: RecommendArticleCategory[];
  recommendFrontendArticles: RecommendArticleCategory[];
}

const Side = styled.div`
  display: grid;
  gap: 30px;
`;

const SideBar: React.FC<Props> = ({ ...props }) => {
  return (
    <Side>
      <UserCard { ...props.userData } />
      <SearchCard />
      <RecommendArticles articles={props.recommendArticles} />
      <RecommendArticlesCategory backendArticles={props.recommendBackendArticles} frontendArticles={props.recommendFrontendArticles} />
    </Side>
  )
}

export default SideBar