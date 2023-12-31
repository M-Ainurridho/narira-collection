import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postData } from '../../api'
import { exchangeToken } from '../../utils'

import axios from 'axios'
import InputText from '../../components/forms/InputText'
import FloatAlert from '../../components/alerts/FloatAlert'
import { login } from '../../redux/reducers'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errors, setErrors] = useState([])
   const [loading, setLoading] = useState(false)
   const { status, msg } = useSelector((state) => state.alert)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const submitLogin = async (e) => {
      e.preventDefault()

      setLoading(!loading)

      const data = {
         email,
         password,
      }

      const newUser = await postData(`http://localhost:3000/auth/login`, data)

      if (newUser?.errors) {
         setErrors(newUser.errors)
      } else {
         const token = newUser.payload

         localStorage.setItem('nariratoken', token)
         axios.defaults.headers.common['auth-token'] = token

         const data = await exchangeToken()

         if (data?.payload) {
            dispatch(login({ isLogin: true, user: data.payload }))
            navigate('/member')
         }
      }

      setLoading(!loading)
   }

   return (
      <section
         id="login"
         className="min-h-screen flex justify-center items-center relative"
      >
         <div className="w-96 bg-slate-900/25 border border-slate-900/25 rounded-lg overflow-hidden ">
            <h3 className="bg-lilac text-2xl text-white text-center py-3 border-b border-slate-900/50">
               MASUK
            </h3>

            <form onSubmit={submitLogin} className="px-6 py-8">
               <InputText
                  type="email"
                  field="email"
                  placeholder="Alamat Email"
                  icon="user"
                  value={email}
                  onValueChange={setEmail}
                  modifier="input-email"
                  errors={errors}
               />

               <InputText
                  type="password"
                  field="password"
                  placeholder="Kata Sandi"
                  icon="show"
                  value={password}
                  onValueChange={setPassword}
                  modifier="input-password"
                  errors={errors}
                  cursor="cursor-pointer"
               />

               <div className="mb-2 mt-8 text-center text-white">
                  <Link
                     to="/auth/forgotpassword"
                     className="hover:text-blue-700 duration-100"
                  >
                     Lupa Kata Sandi?
                  </Link>
               </div>
               <div className="mb-4 text-center">
                  <button
                     type="submit"
                     className="bg-lilac hover:bg-lilac-hover duration-100 text-white p-2 px-6 rounded-full shadow"
                  >
                     Masuk
                  </button>
               </div>
               <div className="text-center text-white">
                  <p className="text-sm">
                     Belum punya akun?{' '}
                     <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-700 duration-100"
                     >
                        Daftar
                     </Link>
                  </p>
               </div>
            </form>
         </div>

         {status != null && <FloatAlert msg={msg} />}
      </section>
   )
}

export default Login
