import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'

import {UserProvider} from "./components/security/UserProvider";
import {Header} from "./components/header/Header";
import {SearchBar} from "./components/header/SearchBar";
import {Search} from "./components/pages/search/Search";
import {Recipe} from "./components/pages/recipes/Recipe";
import {Home} from './components/pages/home/Home';

function App() {
  return (
      <UserProvider>
        <HashRouter>
          <Header/>
          <SearchBar/>
          <Routes>
            <Route path={'/recipe/:recipeName'} element={<Recipe/>}/>
            <Route path={'/search'} element={<Search/>} />
            <Route index element={<Home/>}/>
            <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>Page Not Found</h1>}/>
          </Routes>
        </HashRouter>
      </UserProvider>
  );
}

export default App;
