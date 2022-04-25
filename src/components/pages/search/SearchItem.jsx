import React from 'react'
import {Paper, styled} from "@mui/material";
import {Link} from "react-router-dom";

export function SearchItem(props) {

  return (
      <Root key={props.id}>
        <h3>{props.name}</h3>
        <StatsContainer>
          <Stat>Cook Time: {props.time} minutes</Stat>
          <Stat>Temp: {props.temp}</Stat>
          <Link to={'/recipe/' + props.url}>more...</Link>
        </StatsContainer>
      </Root>
  )
}

const Root = styled(Paper)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: '1000px',
  [theme.breakpoints.down('sm')]: {
  }
}))

const StatsContainer = styled('div')(({theme}) => ({
  textAlign: 'left',
  padding: '10px',
  margin: '10px'
}))
const Stat = styled('div')(({theme}) => ({

}))