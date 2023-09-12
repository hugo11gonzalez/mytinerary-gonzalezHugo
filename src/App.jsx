import React from 'react'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Cities from './pages/Cities'
import Login from './pages/Login'

const router = createBrowserRouter ([
  { path:'/', element: <Layout/>,
    children:[
      {path:"/",element:<Home/>},
      {path:'/cities',element:<Cities/>},
      {path:'/login',element:<Login/>}
    ]
  }
])
function App() {


  return (
    <>
     <RouterProvider router = {router}></RouterProvider>
    </>
  )
}

export default App
