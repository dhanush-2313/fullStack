import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.post("http://localhost:3000/verify");
        if (response.data.message === "Session verified") {
          navigate('/');
        }
      } catch (error: any) {
        console.log("Internal server error");
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password
      });
      if (response.data.message === "Logged in successfully") {
        alert("User logged in successfully");
        navigate("/");
      } else {
        console.log("Could not log in user");
      }
    } catch (error: any) {
      console.log("Internal server error");
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("Internal server error");
      }
    }
  };

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
        <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;