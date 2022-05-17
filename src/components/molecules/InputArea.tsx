import React from 'react'
import styled from 'styled-components';
import { Input, Text } from '../atoms'

type Props = {
  error?: boolean;
  label: string;
  name: string;
}

const Area = styled.div`
  width: 100%;
`;

const InputArea: React.FC<Props> = ({ label, name, error = false }) => {
  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  return (
    <Area>
      <label htmlFor={name}>
        <Text color='#999' fontSize='20px' fontWeight='bold' text={label} margin="0 0 10px" />
      </label>
      <Input placeholder={capitalizedName} id={name} name={name} margin={error ? "0 0 10px" : "0 0 47px"} />
      {error && <Text color='#E63946' fontSize='12px' fontWeight='bold' text={`${label}を入力してください。`} margin="0 0 25px" />}
    </Area>
  )
}

export default InputArea