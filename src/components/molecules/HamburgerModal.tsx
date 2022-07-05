import React from 'react'
import styled from 'styled-components';
import { footerDatas } from '../../../lib/datas';
import FooterList1 from './FooterList1';

type Props = {
  isOpen: boolean;
}

const Modal = styled.div<Props>`
  align-items: center;
  background-color: #2e3e4e;
  display: flex;
  height: calc(100vh - 75px);
  justify-content: center;
  position: fixed;
  top: 75px;
  transition: 0.5s transform ease-out;
	transform: translateX(100vw);
  width: 100vw;

  ${({ isOpen }) => {
		return (
			isOpen && `transform: translateX(0)`
		);
	}}
`

const HamburgerModal: React.FC<Props> = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <FooterList1 datas={[ ...footerDatas.list2.datas, ...footerDatas.list1.datas ]} gap="40px"/>
    </Modal>
  )
}

export default HamburgerModal