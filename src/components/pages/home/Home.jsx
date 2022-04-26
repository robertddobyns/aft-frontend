import React from 'react'
import {styled} from "@mui/material";

export function Home() {

  return (
      <Root>
        You don't have time to hear about how Grandma survived some catastrophic event in order to cook her famous Brussel Sprouts.
        We all love Grandma, but your kids are hungry now. Our site doesn't have any stories, backgrounds, or who discovered the recipe.
        There's no fluff, no fancy, just the recipe you're looking for. We want happy kids which is why we say, "More Recipes, Less Grandma's Backstory"
      </Root>
  )

}

const Root = styled('div')(({theme})=> ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 5px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '1000px',
    margin: '0 auto'
  }
}))