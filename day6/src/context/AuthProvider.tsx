import { useState } from "react"
import { authContext } from "./authContext";

export default function AuthProvider({children}:any) {
    const [isAuth,setIsAuth] = useState(false);
  return (
    <authContext.Provider value={isAuth}>
        {children}
    </authContext.Provider>
  )
}
