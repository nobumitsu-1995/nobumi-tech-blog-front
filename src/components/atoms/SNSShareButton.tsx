import React from 'react'
import styled from 'styled-components'

type Props = {
  backgroundColor: string;
  icon: React.ReactNode;
  label: string;
}

const SNSShareButton: React.FC<Props> = ({...props}) => {
  return (
    <StyledDiv backgroundColor={props.backgroundColor}>
      <Icon>
        {props.icon}
      </Icon>
      {props.label}
    </StyledDiv>
  )
}

const StyledDiv = styled.div<{backgroundColor: string}>`
  background-color: ${({backgroundColor}) => backgroundColor};
  color: #fff;
  font-weight: bold;
  padding: 18px 0;
	position: relative;
  text-align: center;
`;

const Icon = styled.div`
	align-items: center;
	bottom: 0;
	display: flex;
  left: 30px;
	margin: auto;
	position: absolute;
	top: 0;
`;

export default SNSShareButton