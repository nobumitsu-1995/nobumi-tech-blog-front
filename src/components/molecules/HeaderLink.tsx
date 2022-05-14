import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';
import { Text } from '../atoms'

type Props = {
  link: string;
  img: string;
  text: string;
};

const Flex = styled.a`
  align-items: center;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 0 20px;

  &:hover {
    background: #fff;
    opacity: 0.8;
    transition: 0.2s;
    
    p {
      color: #3D70B8;
      transition: 0.2s;
    }
  }
`;

const HeaderLink: React.FC<Props> = ({ ...props }) => {
  return (
    <Link href={props.link} passHref>
      <Flex>
        <Image src={`/${props.img}`} alt={props.text} width="24" height="24" />
        <Text color='#fff' fontSize='20px' fontWeight='bold' text={props.text}/>
      </Flex>
    </Link>
  )
}

export default HeaderLink