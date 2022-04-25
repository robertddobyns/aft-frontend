import React, {useEffect, useState} from 'react'
import {
  styled,
  TextField,
  Autocomplete, Button,
} from "@mui/material";

import {useNavigate} from "react-router-dom";

export function SearchBar(props) {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/search?keyword='+keyword)
    setKeyword('')
  }

  return (
      <Root>
        <Form onSubmit={handleSubmit}>
          <TextField
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            size={'small'}
            sx={{width: '98%'}}
          />
          <Button type={"submit"}>Search</Button>
        </Form>
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '0 auto',
    width: '1000px'
  }
}))

const Form = styled('form')(({theme}) => ({
  display: 'flex',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  [theme.breakpoints.up('sm')] : {
    flexDirection: 'row',
    width: '100%'
  }
}))