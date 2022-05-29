import {Outlet} from 'react-router-dom'
import {Header} from "./components/header/Header";
import {SearchBar} from "./components/header/SearchBar";

const Layout = () => {
  return (
      <>
        <Header/>
        <SearchBar/>
        <Outlet/>
      </>
  )
}

export default Layout