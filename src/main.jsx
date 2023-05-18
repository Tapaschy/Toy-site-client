import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import UserContext from './provider/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode></UserContext>
)
