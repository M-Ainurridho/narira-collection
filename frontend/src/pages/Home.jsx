import { Link } from 'react-router-dom'
import { products } from '../utils'

const Home = () => {
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
                  {products.map((product, i) => {
                     return (
                        <div
                           key={i}
                           className="card relative rounded-md overflow-hidden"
                        >
                           <div className="card-img">
                              <img
                                 src={`/src/assets/images/products/${product}`}
                                 className="w-full h-56 object-cover object-center"
                              />
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   )
}

export default Home
