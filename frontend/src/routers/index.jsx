import { Route, Routes } from 'react-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import NotFound from '../pages/errors/404'
import GuestLayout from '../pages/layouts/GuestLayout'

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
         <Route element={<NotFound />} path="*"></Route>
      </Routes>
   )
}

export default Router
