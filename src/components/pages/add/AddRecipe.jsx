import React, {useEffect, useState} from "react";
import {Button, styled, TextField} from "@mui/material";
import axios from "axios";

export function AddRecipe() {

  const [name, setName] = useState('')
  const [temp, setTemp] = useState('')
  const [time, setTime] = useState('')
  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')
  const token = localStorage.getItem('token')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(process.env.REACT_APP_BASE_URL + "recipes", {
      name: name,
      temp: temp,
      timeInMinutes: time,
      description: desc,
      url: url
    }, {
      headers: {
        'Authorization': token
      }
    })
    .then((response) => {
      handleClear()
      window.location.reload()
    })
    .catch(e => {
      console.log(e.message)
    })
  }

  const handleClear = () => {
    setName('')
    setTemp('')
    setTime('')
    setDesc('')
    setUrl('')
  }

  return (
      <Form onSubmit={handleSubmit}>
        {}
        <TextField
            label={'Name'}
            variant={'outlined'}
            onChange={e => setName(e.target.value)}
            value={name}
            style={{width: '100%', paddingBottom: '20px'}}
        />
        <Details>
          <TextField
              label={'Temp'}
              variant={'outlined'}
              onChange={e => setTemp(e.target.value)}
              value={temp}
          />
          <TextField
              label={'Time'}
              variant={'outlined'}
              onChange={e => setTime(e.target.value)}
              value={time}
              style={{width: '30%'}}
          />
          <TextField
              label={'URL'}
              variant={'outlined'}
              onChange={e => setUrl(e.target.value)}
              value={url}
              style={{width: '30%'}}
          />
        </Details>
        <TextField
            label={'Description'}
            variant={'outlined'}
            onChange={e => setDesc(e.target.value)}
            value={desc}
            multiline
            rows={5}
            style={{paddingBottom: '20px'}}
        />
        <ButtonContainer>
          <Button
              variant={'contained'}
              style={{width: '200px', margin: '0 auto'}}
              type={'button'}
              onClick={handleClear}
          >
            Clear Form
          </Button>
          <Button
              variant={'contained'}
              style={{width: '200px', margin: '0 auto'}}
              type={'submit'}
          >
            Submit
          </Button>
        </ButtonContainer>
      </Form>
  )
}

const Form = styled('form')(({theme}) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '65vh'
}))

const Details = styled('div')(({theme}) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '20px'
}))

const ButtonContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}))