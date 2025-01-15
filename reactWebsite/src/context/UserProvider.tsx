import { useState } from "react";
import { userContext } from "./userContext";


export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState("Dhanush");
  const [age, setAge] = useState(21);
  return (
    <>
      <userContext.Provider value={{ user, setUser, age, setAge }}>
        {children}
      </userContext.Provider>
    </>
  )
}
