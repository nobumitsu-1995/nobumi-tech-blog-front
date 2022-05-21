import React from 'react'
import { GapColumnList } from '../../styles/styled-components'
import { ContactCard, ContactSNSCard } from '../organisms'

const Contact = () => {
  return (
    <GapColumnList gap='20px'>
      <ContactCard/>
      <ContactSNSCard/>
    </GapColumnList>
  )
}

export default Contact