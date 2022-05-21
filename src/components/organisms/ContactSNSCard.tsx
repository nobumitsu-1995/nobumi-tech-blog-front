import { useRouter } from 'next/router'
import React from 'react'
import { snsDatas } from '../../../lib/datas';
import { Button, Paper } from '../atoms'
import { TitleInPaper } from '../molecules';

const ContactSNSCard = () => {
  const router = useRouter();

  const handleClickButton = (url: string) => {
    router.push(url)
  };

  return (
    <Paper padding='50px'>
      <TitleInPaper text='SNSでお問い合わせ' />
      {snsDatas.map(data => {
        return (
          <Button 
            key={data.name}
            backgroundColor={data.color}
            borderColor={data.color}
            color='#fff'
            icon={data.icon}
            iconSpace='15px'
            label={data.name} 
            onClick={() => handleClickButton(data.url)}        
          />
        )
      })}
    </Paper>
  )
}

export default ContactSNSCard