import React from 'react'
import { Button, Paper } from '../atoms'
import { InputArea, TitleInPaper } from '../molecules'

const ContactCard = () => {
  return (
    <Paper borderColor='#7C83CC' padding='40px 50px'>
      <TitleInPaper text='メールアドレスでお問い合わせ'/>
      <form action="">
        <InputArea label='名前' name='name' />
        <InputArea label='メールアドレス' name='e-mail' />
        <InputArea label='お問い合わせ内容' name='content' type='textarea' />
        <Button backgroundColor='#3D70B8' borderColor='#3D70B8' borderRadius='5px' color='#fff' fontSize='20px' label='送信' onClick={() => console.log("submit!")} />
      </form>
    </Paper>
  )
}

export default ContactCard