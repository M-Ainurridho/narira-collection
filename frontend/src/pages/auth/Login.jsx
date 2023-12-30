import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   const [isShow, setIsShow] = useState(false)

   const submitLogin = (e) => {
      e.preventDefault()
   }

   const showPassword = () => {
      const password = document.querySelector('.input-password')

      isShow
         ? password.setAttribute('type', 'text')
         : password.setAttribute('type', 'password')
   }

   useEffect(() => {
      showPassword()
   }, [isShow])

   return (
      <section
         id="login"
         className="min-h-screen flex justify-center items-center"
      >
         <div className="w-80 bg-slate-900/25 border border-slate-900/25 rounded-lg overflow-hidden ">
            <h3 className="bg-lilac text-2xl text-white text-center py-3 border-b border-slate-900/50">
               LOGIN
            </h3>
            <form onSubmit={submitLogin} className="px-6 py-8">
               <div className="mb-4">
                  <div className="relative">
                     <input
                        type="text"
                        className="input-username bg-neutral-200 text-neutral-500 w-full py-2 ps-4 pe-10 border rounded-full placeholder:text-neutral-400 focus:outline-none focus:border-lilac focus:ring-1 focus:ring-lilac"
                        placeholder="Username"
                     />
                     <span className="absolute right-3 top-2.5 flex">
                        <box-icon name="user" color="#a3a3a3"></box-icon>
                     </span>
                  </div>
               </div>
               <div className="mb-4">
                  <div className="relative">
                     <input
                        type="password"
                        className="input-password bg-neutral-200 text-neutral-500 w-full py-2 ps-4 pe-10 border rounded-full placeholder:text-neutral-400 focus:outline-none focus:border-lilac focus:ring-1 focus:ring-lilac"
                        placeholder="Password"
                     />
                     <span
                        className="absolute right-3 top-2.5 flex cursor-pointer"
                        onClick={() => setIsShow(!isShow)}
                     >
                        {isShow ? (
                           <box-icon name="hide" color="#a3a3a3"></box-icon>
                        ) : (
                           <box-icon name="show" color="#a3a3a3"></box-icon>
                        )}
                     </span>
                  </div>
               </div>
               <div className="mb-2 mt-8 text-center text-white">
                  <Link to="/auth/forgotpassword">Forgot Password?</Link>
               </div>
               <div className="mb-4 text-center">
                  <button
                     className="bg-lilac hover:bg-lilac-hover duration-100 text-white p-2 px-6 rounded-full shadow"
                     onClick={() => navigate('/login')}
                  >
                     Login
                  </button>
               </div>
               <div className="text-center text-white">
                  <p className="text-sm">
                     New user?{' '}
                     <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-700 duration-100"
                     >
                        Register
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </section>
   )
}

export default Login
