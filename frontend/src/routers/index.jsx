import { Route, Routes } from 'react-router'

import GuestLayout from '../pages/layouts/GuestLayout'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

import NotFound from '../pages/errors/404'
import Dashboard from '../pages/member/Dashboard'

const Router = () => {
   return (
      <Routes>
         <Route
            element={
               <GuestLayout>
                  <Home />
               </GuestLayout>
            }
            path="/"
         ></Route>
         <Route
            element={
               <GuestLayout>
                  <Products />
               </GuestLayout>
            }
            path="/products"
         ></Route>
         <Route
            element={
               <GuestLayout>
                  <About />
               </GuestLayout>
            }
            path="/about"
         ></Route>
         <Route element={<Login />} path="/login"></Route>
         <Route element={<Register />} path="/register"></Route>

         <Route element={<Dashboard />} path="/member"></Route>
         <Route element={<NotFound />} path="*"></Route>
      </Routes>
   )
}

export default Router
