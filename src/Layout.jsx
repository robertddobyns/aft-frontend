import {Outlet} from 'react-router-dom'
import {Header} from "./components/header/Header";
import {SearchBar} from "./components/header/SearchBar";
import {Footer} from "./components/footer/Footer";

const Layout = () => {
  return (
      <>
        <Header/>
        <SearchBar/>
        <Outlet/>
        <Footer/>
      </>
  )
}

export default Layout