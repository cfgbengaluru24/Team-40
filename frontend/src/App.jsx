import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Trainer/Dashboard';
import LoginSignUp from './components/LoginSignUp'; 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='login' element={<LoginSignUp isRegistered={true} />} />
        <Route path='register' element={<LoginSignUp isRegistered={false} />} />
        <Route path="admin" element={<Admin />} />
        <Route path="trainer" element={<Dashboard />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

