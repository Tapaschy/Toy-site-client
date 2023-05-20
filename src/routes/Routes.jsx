import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Addtoy from "../pages/addToy/Addtoy";
import Mytoys from "../pages/mytoys/Mytoys";

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
                element:<Addtoy></Addtoy>,
            },
            {
                path: '/mytoys',
                element:<Mytoys></Mytoys>,
            },
        
      ]
    },
  ]);
  export default router;