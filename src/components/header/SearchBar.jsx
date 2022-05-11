import React, {useEffect, useState} from 'react'

import {
  styled,
  TextField,
  Autocomplete,
  Box
} from "@mui/material";
import {Link} from 'react-router-dom'
import axios from "axios";

export function SearchBar(props) {
  const [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    const getData = () => {
      axios.get(process.env.REACT_APP_BASE_URL + 'recipes')
      .then(res => setSearchResults(res.data))
      .catch(e => console.log(e))
    }
    getData()
  }, [])

  const handleKeywordSearch = (event) => {
    if (event.target.value.length > 2) {
      axios.get(process.env.REACT_APP_BASE_URL + 'recipes?search=' + event.target.value)
      .then(res => setSearchResults(res.data))
      .catch(e => console.log(e))
    }
  }

  return (
      <Root>
        <Autocomplete
            id={'search-box'}
            getOptionLabel={(searchResults) => searchResults.name}
            options={searchResults}
            onInputChange={handleKeywordSearch}
            sx={{width: '98%'}}
            isOptionEqualToValue={(option, value) =>
                option.name === value.name
            }
            noOptionsText={'No recipes found for that search'}
            renderOption={(props, searchResults) => (
                <Box>
                  <Link to={'recipe/' + searchResults.url}>
                    {searchResults.name}
                  </Link>
                </Box>
            )}
            renderInput={(params) => (
                <TextField key={params.key}
                           {...params}
                           label={'Search for a recipe'}
                />)
            }
        />
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '20px',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '0 auto',
    width: '1000px',
  }
}))