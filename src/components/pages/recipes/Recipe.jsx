import React, {useEffect, useState} from 'react'
import {styled} from "@mui/material";
import {useParams} from "react-router-dom";
import recipes from '../../assets/recipes.json'
import axios from "axios";

export function Recipe(props) {
  const [recipe, setRecipe] = useState({})
  const urlParams = useParams()

  useEffect(() => {
    const getData = () => {
      axios.get(process.env.REACT_APP_BASE_URL + 'recipes/' + urlParams.recipeName)
      .then(res => setRecipe(res.data))
      .catch(e => console.log(e))
    }
    // const getData = () => {
    //   const foundRecipe = recipes.filter(
    //       item => item.url === urlParams.recipeName)
    //   setRecipe(foundRecipe[0])
    // }
    getData()
  }, [urlParams.recipeName])

  return (
      <Root>
        {recipe ?
            <div>
              <Title>{recipe.name}</Title>
              <InstructionContainer>
                <p>Cook time: {recipe.timeInMinutes} minutes</p>
                <p>Temp: {recipe.temp}</p>
                <p>Instructions: {recipe.description}</p>
              </InstructionContainer>
            </div>
            :
            <h1 style={{textAlign: 'center'}}>Recipe Not Found</h1>
        }
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 5px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '1000px',
    margin: '0 auto'
  }
}))

const Title = styled('h1')(({theme}) => ({
  textAlign: 'center'
}))

const InstructionContainer = styled('div')(({theme}) => ({}))