import React, {useEffect, useMemo, useState} from 'react'
import {styled} from "@mui/material";
import {useLocation} from "react-router-dom";
import axios from "axios";
import recipes from '../../assets/recipes.json'
import {SearchItem} from "./SearchItem";

export function useQuery() {
  const {search} = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export function Search() {
  const query = useQuery()

  const [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    // const getData = () => {
    //   query.get('keyword') ?
    //       axios.get(
    //           process.env.REACT_APP_BASE_URL + 'recipes?search=' + query.get(
    //               'keyword'))
    //       .then(res => setSearchResults(res.data))
    //       .catch(e => console.log(e))
    //       :
    //       axios.get(process.env.REACT_APP_BASE_URL + 'recipes')
    //       .then(res => setSearchResults(res.data))
    //       .catch(e => console.log(e))
    // }
    const getData = () => {
      const filteredRecipes = recipes.filter(item => item.name.toLowerCase().search(query.get('keyword')) > -1)
      setSearchResults(filteredRecipes)
    }
    getData()
  }, [query])

  return (
      <Root>
        {searchResults.length > 0 ? searchResults.map(item => (
            <>
              <SearchItem
                  id={item.id}
                  name={item.name}
                  url={item.url}
                  temp={item.temp}
                  time={item.timeInMinutes}
              />
            </>
        ))
        :
        <h2 style={{textAlign: 'center'}}>No Recipes Found</h2>
        }
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 5px'
}))