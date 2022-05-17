import React from 'react'
import { Button, Paper } from '../atoms'
import { TitleInPaper } from '../molecules'

const ContactCard = () => {
  return (
    <Paper>
      <TitleInPaper text='メールアドレスでお問い合わせ'/>
      <form action="">
        <Button label='送信' onClick={() => console.log("submit!")} />
      </form>
    </Paper>
  )
}

export default ContactCard