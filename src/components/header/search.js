import React from 'react'
import axios from "axios";

export const recipeSearch = (keyword) => {
  let recipeArray = []

  axios.get(process.env.REACT_APP_BASE_URL + 'recipes?search=' + keyword)
  .then(res => console.log(res.data))
  .catch(e => console.log(e))
  return recipeArray
}