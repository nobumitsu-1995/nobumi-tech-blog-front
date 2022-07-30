import React from 'react'
import styled from 'styled-components'

const PreviewTag = () => {
  return (
    <Tag>プレビュー画面です！！</Tag>
  )
}

export default PreviewTag

const Tag = styled.div`
  background-color: red;
  border-radius: 0 0 0 5px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
`