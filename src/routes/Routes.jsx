import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Addtoy from "../pages/addToy/Addtoy";
import Mytoys from "../pages/mytoys/Mytoys";
import Alltoys from "../pages/alltoys/Alltoys";
import PrivateRoute from "./PrivateRoute";
import Others from "../layouts/Others";
import Toydetails from "../pages/alltoys/Toydetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
            {
                path: '/addatoy',
                element:<PrivateRoute><Addtoy></Addtoy></PrivateRoute>,
            },
            {
                path: '/mytoys',
                element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
            },
            {
                path: '/alltoys',
                element:<Alltoys></Alltoys>,
            },
        
      ]
    },
    {
        path:"/",
        element:<Others></Others>,
        children:[
            
                {
                    path: '/details',
                    element:<Toydetails></Toydetails>,
                },
            
        ]
    }
  ]);
  export default router;