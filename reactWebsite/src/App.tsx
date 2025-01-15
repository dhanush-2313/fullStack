import { UserProvider } from "./context/userProvider";
import Navbar from "./Navbar";

export default function App() {
  return (
   <UserProvider>
    <Navbar />
   </UserProvider>
  )
}