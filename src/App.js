import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {UserProvider} from "./components/security/UserProvider";
import {Header} from "./components/header/Header";
import {SearchBar} from "./components/header/SearchBar";
import {Search} from "./components/pages/search/Search";
import {Recipe} from "./components/pages/recipes/Recipe";
import {Home} from './components/pages/home/Home';

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
          <Header/>
          <SearchBar/>
          <Routes>
            <Route path={'/recipe/:recipeName'} element={<Recipe/>}/>
            <Route path={'/search'} element={<Search/>} />
            <Route path={'/'} element={<Home/>}/>
            <Route path={'*'} element={<h1>Page Not Found</h1>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;
