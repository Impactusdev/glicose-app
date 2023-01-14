import React, { useState } from 'react'
// dependencies
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'


const Test = () => {

  const [diabeteNumber, setDiabeteNumber] = useState('');
  const [aviso, setAviso] = useState('');
  const [emoji, setEmoji] = useState('');
  const [corMensagem, setCorMensagem] = useState('');

  const handleTest = () => {
    let mensagem;

    if (diabeteNumber === '') {
      alert('Por favor, digite um valor!');
    }
    else if (diabeteNumber >= 1 && diabeteNumber <= 99) {
      setAviso(mensagem = 'Sua glicose está normal 👏');
      setCorMensagem('#84cc16');
      setEmoji('✓');
      console.log(corMensagem)
    } else if (diabeteNumber >= 100 && diabeteNumber <= 125){
      setAviso(mensagem = 'Sua glicose está elevada 😯');
      setCorMensagem('#eab308');
      setEmoji('!');
    } else if (diabeteNumber >= 126 && diabeteNumber <= 300){
      setAviso(mensagem = 'Você está com diabete! 😱');
      setCorMensagem('#ef4444');
      setEmoji('!');
    } 
    else if (diabeteNumber >= 301) {
      setAviso(mensagem = '');
      setCorMensagem('#a8a29e');
      setEmoji('🤔');
    }
    setDiabeteNumber('');

    // setTimeout(() => {
    //   setAviso('');
    //   setEmoji('');
    //   setCorMensagem('');
    // }, 7000);
  }

  return (
    <div className='flex flex-col items-center w-[100%] h-[100%] rounded-xl py-10 px-5 bg-white relative'>
      <div className='absolute top-0 rounded-t-xl h-[20px] w-full' style={{backgroundColor: corMensagem}}/>
      <div className='flex flex-col items-center justify-center py-4 w-full'>
        <div className='flex items-center justify-center w-[70px] h-[70px] border-4 rounded-full text-4xl font-bold' style={{borderColor: corMensagem, color: corMensagem}}>
          {emoji}
        </div>
        <p className='pb-4 pt-2' style={{color: corMensagem}}>{aviso}</p>
      </div>
      <TextField
        className='w-[100%]'
        id="outlined-number"
        label="Valor do teste"
        type="number"
        value={diabeteNumber}
        onChange={(e) => setDiabeteNumber(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div className='w-[100%] mt-4'>
        <Stack>
          <Button onClick={() => handleTest()} variant='contained' className='bg-[#2196f3]'>Ok</Button>
        </Stack>
      </div>
    </div>
  )
};

export default Test;