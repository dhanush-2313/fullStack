import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css"
import { Login } from "./components/Login";

const App = ()=>{
  return <>
    <div className="page">
      <Sidebar/>
      <Navbar />
    </div>

    <Login />
    
  </>
}

export default App;