import React from 'react'
import styled from 'styled-components'
import { createArr, usePageContext } from '../../../lib/PagenationContext'
import { ArrowIcon, Button } from '../atoms'

const StyledPagination = styled.ul`
  display: flex;
  gap: 10px;
`;

const Pagination = () => {
  const { current, setCurrent, pages } = usePageContext();

  const prevPage = () => {
    // 1ページ目の時は何もしない
    return current === 1
    ? false
    : setCurrent(current - 1);
  }

  const nextPage = () => {
    // 最終ページの時は何もしない
    return current === pages
    ? false
    : setCurrent(current + 1);
  }

  return (
    <StyledPagination>
      <li>
        <Button
          icon={<><ArrowIcon direction='left'/><ArrowIcon direction='left'/></>}
          iconSpace="6px"
          iconPosition='right'
          label={''} 
          onClick={() => setCurrent(1)}
          padding="15px"
        />
      </li>
      <li>
        <Button
          icon={<ArrowIcon direction='left'/>}
          iconSpace="9px"
          iconPosition='right'
          label={''} 
          onClick={prevPage}
          padding="15px"
        />
      </li>
      {createArr(pages).map(page => {
        return(
          <li key={page}>
            <Button
              fontSize='14px'
              fontWeight='bold'
              label={page.toString()} 
              onClick={() => setCurrent(page)}
              padding="7px 10px"
            />
          </li>
        );
      })}
      <li>
        <Button
          icon={<ArrowIcon/>}
          iconSpace="12px"
          iconPosition='right'
          label={''} 
          onClick={nextPage}
          padding="15px"
        />
      </li>
      <li>
        <Button
          icon={<><ArrowIcon/><ArrowIcon/></>}
          iconSpace="9px"
          iconPosition='right'
          label={''} 
          onClick={() => setCurrent(pages)}
          padding="15px"
        />
      </li>
    </StyledPagination>
  )
}

export default Pagination