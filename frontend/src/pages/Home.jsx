import { Link } from 'react-router-dom'
import { bestseller } from '../utils'
import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentMenu } from '../redux/reducers'

import Card from '../components/Card'

const Home = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setCurrentMenu('Beranda'))
   }, [])

   return (
      <>
         <div className="hero"></div>

         <section id="bestseller" className="px-4 md:px-8 lg:px-16 py-8">
            <div className="container">
               <div className="flex justify-between items-end">
                  <h3 className="font-semibold text-xl">Produk Terlaris</h3>
                  <Link
                     to="/"
                     className="text-xs text-blue-500 hover:text-blue-700"
                  >
                     Lihat semua
                  </Link>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
                  {bestseller.map((product, i) => {
                     return (
                        <Fragment key={i}>
                           <Card index={i} image={product.images}>
                              <div className="flex items-center justify-between p-2 text-sm md:text-base">
                                 <h5 className="truncate w-4/5">
                                    {product.name}
                                 </h5>
                                 <p>30k</p>
                              </div>
                           </Card>
                        </Fragment>
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   )
}

export default Home
