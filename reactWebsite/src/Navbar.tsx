import { useContext } from "react"
import { userContext } from "./context/userContext"

type UserContextType = {
  user: string;
  age: number;
};

export default function Navbar() {
    const {user,age} = useContext(userContext) as UserContextType;
  return (
    <div>
      <p>User: {user}</p>
      <p>Age: {age}</p>
    </div>
  )
}
