import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./ProtectedRoute/Protected";


export const router = createBrowserRouter([
    {
        path:"/",
        index:true,
        element:<Protected> 
            <Home/> 
            </Protected>
        ,
    },
    {
        path:"/login",
        element:<Login/>
    },
    
    {
        path:"/register",
        element:<Register/>
    },

])