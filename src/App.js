import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import {Search} from "./components/pages/search/Search";
import {Recipe} from "./components/pages/recipes/Recipe";
import {Home} from './components/pages/home/Home';
import Login from "./components/security/Login";
import Layout from "./Layout";
import Missing from "./components/pages/missing/Missing";
import Test from './components/security/Test'
import RequireAuth from "./components/security/RequireAuth";
import {AddRecipe} from "./components/pages/add/AddRecipe";

function App() {

  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          {/* public routes */}
          <Route path={'login'} element={<Login/>}/>
          <Route index path={'/'} element={<Home/>}/>
          <Route index path={'/search'} element={<Search/>}/>
          <Route path={'/recipe/:recipeName'} element={<Recipe/>}/>

          {/* private routes*/}
          <Route element={<RequireAuth allowedRoles={['USER', 'ADMIN']}/>}>
            <Route path={'/add-recipe'} element={<AddRecipe/>} />
            <Route path={'/test'} element={<Test/>}/>
          </Route>

          {/* Catch All*/}
          <Route path={'*'} element={<Missing/>}/>
        </Route>
      </Routes>
  );
}

export default App;
