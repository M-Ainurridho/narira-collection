import { Route, Routes } from 'react-router'

import About from '../pages/About'
import Home from '../pages/Home'
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
