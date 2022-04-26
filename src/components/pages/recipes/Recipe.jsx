import React, {useEffect, useState} from 'react'
import {styled} from "@mui/material";
import {useParams} from "react-router-dom";
import recipes from '../../assets/recipes.json'

export function Recipe(props) {
  const [recipe, setRecipe] = useState({})
  const urlParams = useParams()

  useEffect(() => {
    const getData = () => {
      const foundRecipe = recipes.filter(item => item.url === urlParams.recipeName)
      setRecipe(foundRecipe[0])
    }
    getData()
  },[urlParams.recipeName])

  return (
      <Root>
        <Title>{recipe.name}</Title>
        <InstructionContainer>
          <p>Cook time: {recipe.timeInMinutes} minutes</p>
          <p>Temp: {recipe.temp}</p>
          <p>Instructions: {recipe.description}</p>
        </InstructionContainer>
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    margin: '0 5px'
  },
  [theme.breakpoints.up('sm')] : {
    maxWidth: '1000px',
    margin: '0 auto'
  }
}))

const Title = styled('h1')(({theme}) => ({
  textAlign: 'center'
}))

const InstructionContainer = styled('div')(({theme}) => ({

}))