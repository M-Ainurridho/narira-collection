import { Link } from 'react-router-dom'
import BrandIcon from './icons/BrandIcon'

const Footer = () => {
   return (
      <footer className="bg-slate-800 text-white grid md:grid-cols-3 gap-y-5 px-4 md:px-8 lg:px-16 py-10 justify-between text-sm">
         <div>
            <h5 className="text-lilac text-lg font-bold mb-2">
               NARIRA COLLECTION
            </h5>
            <p>Situs jual pakaian semua umur daerah cinere dan sekitarnya</p>
            <div className="social-media mt-5">
               <BrandIcon
                  title="Instagram"
                  name="instagram"
                  path="www.instagram.com/ainurridho_7/"
               />
               <BrandIcon
                  title="Facebook"
                  name="facebook"
                  path="www.facebook.com"
               />
               <BrandIcon
                  title="Twitter"
                  name="twitter"
                  path="www.twitter.com"
               />
            </div>
         </div>
         <div className="justify-self-start md:justify-self-center">
            <h5 className="text-lilac text-lg font-bold mb-2">Bantuan</h5>
            <ul>
               <li className="mb-1">
                  <Link
                     to="/about"
                     className="hover:text-blue-400 hover:duration-100"
                  >
                     Tentang Kami
                  </Link>
               </li>
               <li className="mb-1">
                  <Link
                     to="/contact"
                     className="hover:text-blue-400 hover:duration-100"
                  >
                     Kontak
                  </Link>
               </li>
            </ul>
         </div>
         <div className="justify-self-start md:justify-self-end">
            <p className="flex items-center gap-x-2 mb-2">
               <span className="block">
                  <box-icon name="map" color="white"></box-icon>
               </span>
               <span className="block">
                  Jalan Masjid Arrahmah RT001/011 Nomor 8, Cinere-Depok
               </span>
            </p>
            <p className="flex items-center gap-x-2 mb-2">
               <box-icon name="envelope" color="white"></box-icon>
               <span>m.ainurridho11@gmail.com</span>
            </p>
            <p className="flex items-center gap-x-2 mb-2">
               <box-icon name="phone" color="white"></box-icon>
               <span>+62 858 8348 8601</span>
            </p>
         </div>
      </footer>
   )
}

export default Footer
