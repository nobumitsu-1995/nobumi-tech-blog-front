import React from 'react'
import styled from 'styled-components'
import { Text } from '../atoms'

type Props = {
  text?: string;
}

const Container = styled.div`
  padding: 40px 20px;
  background: #fff;
  border: 1px dashed #2e3e4e;
`;

const Failed: React.FC<Props> = ({ text = "まだ記事がありません。" }) => {
  return (
    <Container>
      <Text
        color='#2e3e4e'
        fontSize='20px'
        fontWeight='bold'
        text={text}
        textalign='center'
      />
    </Container>
  )
}

export default Failed