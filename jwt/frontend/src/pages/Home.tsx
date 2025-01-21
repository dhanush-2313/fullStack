import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.post("http://localhost:3000/verify");
        if (response.data.message !== "Session verified") {
          navigate('/login');
        }
      } catch (error: any) {
        console.log("Internal server error");
        navigate('/login');
      }
    };
    checkSession();
  }, [navigate]);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}