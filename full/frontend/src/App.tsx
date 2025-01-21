import { useState } from "react";
import axios from "axios";

const App = () =>{
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username,
        age,
        email
      });
      if(!response.data){
        console.log("Couldnt create user")
      }
      console.log("User created successfully", response.data)
    }
   catch (error) {
    console.log("Internal server error")
  }}

return (
  <div style={{display:"flex",flexDirection:"column", gap:"20px" ,justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw"}}>
      <input type="text" placeholder="Enter username" onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <input type="number" placeholder="Enter age" onChange={(e)=>{
        setAge(Number(e.target.value))
      }} /> 
      <input type="email" placeholder="Enter email" onChange={(e)=>{
        setEmail(e.target.value)
      }} /> 
      <button onClick={(e) => handleSignup(e)}>Signup</button>
  </div>
)
}

export default App;