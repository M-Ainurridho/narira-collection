import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { setAlert } from '../../redux/reducers'

const FloatAlert = ({ msg }) => {
   const dispatch = useDispatch()

   setTimeout(() => {
      dispatch(setAlert({ status: null, msg: '' }))
   }, 3000)

   return (
      <>
         <div className="absolute bottom-5 bg-green-500 text-white p-2 px-4 rounded-lg flex items-center">
            <p>{msg}</p>
            <span className="flex items-center ms-6">
               <box-icon name="x" color="white"></box-icon>
            </span>
         </div>
      </>
   )
}

export default FloatAlert
