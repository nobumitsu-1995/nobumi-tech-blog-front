import Image from 'next/image'
import React from 'react'
import styled from 'styled-components';
import { StyledLink } from '../atoms'

type Props = {
  fontSize?: string;
  img?: string;
  links: {
    link: string;
    text: string;
  }[]
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const LinkList: React.FC<Props> = ({ fontSize = "16px", img, links }) => {
  return (
    <div>
      {img && <Image src={`/images/${img}`} alt="tag"/>}
      <List>
        {links.map(link => {
          return (
            <li key={link.text}>
              <StyledLink fontSize={fontSize} {...link} />
            </li>
          )
        })}
      </List>
    </div>
  )
}

export default LinkList;