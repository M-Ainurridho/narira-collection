import { Fragment, useEffect } from 'react'
import { products } from '../utils'
import { useDispatch } from 'react-redux'
import { setCurrentMenu } from '../redux/reducers'

import Card from '../components/Card'

const Products = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setCurrentMenu('Produk'))
   }, [])

   return (
      <section id="products" className="mt-20 mb-10 px-4 md:px-8 lg:px-16 py-6">
         <div className="flex justify-between items-center">
            <p className="md:text-lg font-light text-neutral-500">
               Menampilkan 21 Items
            </p>
            <div className="filter flex items-center border px-4 py-2 rounded-full">
               <box-icon name="slider" size="sm"></box-icon>
               <span className="ms-1">Filter</span>
            </div>
         </div>
         <div className="items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mt-2">
            {products.map((product, i) => {
               return (
                  <Fragment key={i}>
                     <Card image={product}>
                        <div className="flex items-center justify-between p-2 pb-5 lg:pb-4 text-sm md:text-base">
                           <h5 className="truncate w-4/5">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aspernatur, vitae.
                           </h5>
                           <p>30k</p>
                        </div>
                        <div className="add-item absolute -bottom-5 left-45% bg-lilac rounded-full w-9 h-9 flex items-center justify-center">
                           <box-icon name="plus" color="white"></box-icon>
                        </div>
                     </Card>
                  </Fragment>
               )
            })}
         </div>
      </section>
   )
}

export default Products
