import { useDispatch, useSelector } from 'react-redux'
import { setCurrentMenu } from '../redux/reducers'
import { useEffect, useState } from 'react'

const Card = ({ index, image, children }) => {
   const { currentMenu } = useSelector((state) => state.generalMenu)
   const [hover, setHover] = useState(false)
   const [wishlist, setWishlist] = useState(false)

   const fadeInAnimate = () => {
      const loves = document.querySelectorAll('.wishlist-icon')

      setWishlist(!wishlist)
      loves[index].classList.add('fade-in')
   }

   const removeAnimate = () => {
      const loves = document.querySelectorAll('.wishlist-icon')

      setWishlist(!wishlist)
      loves[index].classList.remove('fade-in')
   }

   return (
      <div
         className={`card relative border rounded-md ${
            currentMenu == 'Beranda' && 'overflow-hidden'
         } cursor-pointer`}
         title="lorem insum dorom"
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         {/* {hover && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900/75 rounded-md">
               <div className="text-sm text-white h-full flex justify-center items-center">
                  <box-icon name="search" color="white"></box-icon>
                  <span className="ms-1">Detail</span>
               </div>
            </div>
         )} */}
         <div className="card-img">
            <img
               src={`/src/assets/images/products/${image[0]}`}
               className="w-full h-56 object-cover object-center"
               alt={image[0]}
            />
            <span className="wishlist-icon absolute top-2 right-2">
               {wishlist ? (
                  <box-icon
                     type="solid"
                     name="heart"
                     color="purple"
                     onClick={removeAnimate}
                  ></box-icon>
               ) : (
                  <box-icon
                     type="regular"
                     name="heart"
                     color="purple"
                     onClick={fadeInAnimate}
                  ></box-icon>
               )}
            </span>
         </div>
         <div className="card-body">{children}</div>
      </div>
   )
}

export default Card
