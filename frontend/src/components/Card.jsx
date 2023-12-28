import { useDispatch, useSelector } from 'react-redux'
import { setCurrentMenu } from '../redux/reducers'
import { useEffect, useState } from 'react'

const Card = ({ image, children }) => {
   const { currentMenu } = useSelector((state) => state.generalMenu)
   const [hover, setHover] = useState(false)

   return (
      <div
         className={`card relative border rounded-md ${
            currentMenu == 'Beranda' && 'overflow-hidden'
         } cursor-pointer`}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         {hover && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900/75 rounded-md">
               <div className="text-sm text-white h-full flex justify-center items-center">
                  <box-icon name="search" color="white"></box-icon>
                  <span className="ms-1">Detail</span>
               </div>
            </div>
         )}
         <div className="card-img">
            <img
               src={`https://narira-collection.vercel.app/src/assets/images/products/${image}`}
               className="w-full h-56 object-cover object-center"
            />
         </div>
         <div className="card-body">{children}</div>
      </div>
   )
}

export default Card
