import React from 'react'
import styled from 'styled-components';
import { Text } from '../atoms'
import TtlTag from './TtlTag';

type Props = {
  tags?: string[];
  text: string;
  subText: string;
};

const StyledTtl = styled.h1`
  text-align: right;
`;

const Container = styled.div<{subText: string}>`
  margin-bottom: 12.5px;
  padding-bottom: 25.5px;
  position: relative;
  width: 510px;

  &::before {
    content: "${({subText}) => {
      return subText;
    }}";
    color: #55555526;
    display: block;
    font-size: 88px;
    font-weight: bold;
    left: -40px;
    top: -70px;
    position: absolute;
  }

  &::after {
    background-color: #2E3E4E;
    bottom: 0;
    content: "";
    display: block;
    height: 5px;
    position: absolute;
    right: 0;
    width: 420px;
  }
`

const Title: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledTtl>
      <Container subText={props.subText}>
        <Text color='#271E16' fontSize='36px' fontWeight='bold' text={props.text} textAlign="right"/>
      </Container>
      {props.tags && <TtlTag tags={props.tags} />}
    </StyledTtl>
  )
}

export default Title