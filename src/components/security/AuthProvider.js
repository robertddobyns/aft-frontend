import {createContext, useEffect, useState} from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    if(auth.length > 0) {
      const userInfo = jwtDecode(auth)
      console.log(userInfo)
      localStorage.setItem('username', userInfo.sub)
      localStorage.setItem('authorities', JSON.stringify(userInfo.authorities[0].authority) )
    }
  },[auth])

  return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthContext