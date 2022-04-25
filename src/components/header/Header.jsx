import React from 'react'
import {styled} from "@mui/material";

export function Header() {

  return (
      <Root>
        <Title>Air Fryer Temp</Title>
        <Subtitle>More Recipes, Less Grandma's Backstory</Subtitle>
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  margin: '10px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}))

const Title = styled('div')(({theme})=> ({
  fontSize: '2em',
  fontWeight: 'bold'
}))

const Subtitle = styled('div')(({theme}) => ({
  fontSize: '.75em'
}))