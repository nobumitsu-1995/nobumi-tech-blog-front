import React, { useEffect, useState } from 'react'
import { HamburgerButton, HamburgerModal } from '../molecules';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen])

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <HamburgerModal isOpen={isOpen} />
    </>
  )
}

export default HamburgerMenu