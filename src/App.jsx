import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Layout from './Pages/Layout'


// creating routes
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <LandingPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App