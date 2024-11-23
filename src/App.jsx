import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'


export default function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home/> },
        { path: "home", element: <Home/> },
        { path: "contact", element: <Contact/> },
        {
          path: "about", element: <About/>
        },

        {
          path: "portfolio", element: <Portfolio/>
        },

      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

