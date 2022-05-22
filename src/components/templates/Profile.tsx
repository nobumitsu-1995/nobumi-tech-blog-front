import React from 'react'
import { GapColumnList } from '../../styles/styled-components'
import { ContactSNSCard, ProfileCard } from '../organisms'

const Profile = () => {
  return (
    <GapColumnList gap='30px'>
      <li><ProfileCard /></li>
      <li><ContactSNSCard /></li>
    </GapColumnList>
  )
}

export default Profile