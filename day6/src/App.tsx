import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import { useContext, useEffect } from "react";
import { authContext } from "./context/authContext";
import Contact from "./Contact";

function CheckAuth({ children, isAuth }: any) {
    return isAuth ? children : <Navigate to="/login" />
}

export default function App() {
    const { isAuth, name } = useContext(authContext) as any;
    useEffect(() => {
        console.log(name)
        console.log(isAuth);
    }, [name,isAuth])
    return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <CheckAuth isAuth={isAuth}>
                                <Home />
                            </CheckAuth>} />
                        <Route path="/profile" element={
                            <CheckAuth isAuth={isAuth}>
                                <Profile />
                            </CheckAuth>} />
                        <Route path="/content" element={
                            <CheckAuth isAuth={isAuth}>     
                                <Contact />
                            </CheckAuth>
                        } />
                        <Route path="/login" element={<Login />} />
                    </Routes>
            </BrowserRouter>
    )
}