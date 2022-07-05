import React, { useState } from 'react'
import { HamburgerButton, HamburgerModal } from '../molecules';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={(event: React.MouseEvent<HTMLButtonElement>) => setIsOpen(!isOpen)} />
      <HamburgerModal isOpen={isOpen} />
    </>
  )
}

export default HamburgerMenu