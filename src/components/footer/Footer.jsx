import React from "react";
import {Link, styled} from "@mui/material";

export function Footer() {

  const user = localStorage.getItem('username')

  return (
      <Root>
        {user && <Link href={'/add-recipe'}>+ Add Recipe</Link>}
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  width: '100%',
  height: '100px',
  borderTop: '1px solid black'
}))