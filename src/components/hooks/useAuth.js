import {useContext} from "react";
import AuthContext from "../security/AuthProvider";

export function useAuth() {
  return useContext(AuthContext)
}