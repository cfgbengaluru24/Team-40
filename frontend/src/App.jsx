import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home'
import Admin from './components/Admin/Admin'
import Dashboard from './components/Trainer/Dashboard'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
          <Route path='' element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path='trainer' element={<Dashboard />} />
        </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
