import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Trainer/Dashboard';
import LoginSignUp from './components/LoginSignUp';
import SignupForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import AdminLogin from './components/Admin/AdminLogin';
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVF1WmFZfVpgcl9DY1ZTQGYuP1ZhSXxXdkJhXX9ZcHFRQmBYUkY="
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<SignupForm />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="trainer" element={<Dashboard />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

