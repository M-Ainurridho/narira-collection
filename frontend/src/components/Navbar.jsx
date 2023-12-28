import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { menus } from '../utils'
import { setCurrentMenu } from '../redux/reducers'
import Sidebar from './Sidebar'

const Navbar = () => {
   const { currentMenu } = useSelector((state) => state.generalMenu)

   const [dropmenu, setDropmenu] = useState(false)
   const [searching, setSearching] = useState(false)

   window.addEventListener('scroll', function (e) {
      const nav = document.querySelector('nav')

      if (window.pageYOffset < 50 && currentMenu === 'Beranda') {
         nav.classList.remove('bg-white', 'border', 'border-b')
      } else {
         nav.classList.add('bg-white', 'border', 'border-b')
      }
   })

   return (
      <>
         <nav
            className={`${
               currentMenu !== 'Beranda' ? 'bg-white border border-b' : ''
            } fixed left-0 right-0 top-0 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 z-10`}
         >
            <div className="brand">
               <Link to="/" className="font-permanent-marker text-4xl">
                  NARIRA
               </Link>
            </div>
            <div className="navbar-nav hidden lg:block font-light">
               <Navigation styling="px-3" currentMenu={currentMenu} />
            </div>
            <div className="navbar-end flex">
               <div className="icon-menu lg:hidden flex items-center cursor-pointer">
                  {!dropmenu ? (
                     <box-icon
                        name="menu"
                        size="md"
                        onClick={() => setDropmenu(!dropmenu)}
                     ></box-icon>
                  ) : (
                     <box-icon
                        name="x"
                        size="md"
                        onClick={() => setDropmenu(!dropmenu)}
                     ></box-icon>
                  )}
               </div>
               <div className="search-box hidden lg:flex me-4">
                  {searching ? (
                     <div className="relative">
                        <input
                           type="text"
                           placeholder="Cari gamis, kulot, all size"
                           className="border border-neutral-400 ps-5 pe-10 h-full rounded-full text-sm text-neutral-500 placeholder:text-neutral-300 focus:outline-none focus:border-lilac focus:ring-1 focus:ring-lilac"
                        />
                        <span className="absolute right-2 top-2 cursor-pointer">
                           <box-icon
                              name="x"
                              color="#d4d4d4"
                              onClick={() => setSearching(false)}
                           ></box-icon>
                        </span>
                     </div>
                  ) : (
                     <span className="inline-block flex items-center justify-center  w-10 h-10 border border-slate-900 rounded-full cursor-pointer">
                        <box-icon
                           name="search-alt"
                           onClick={() => setSearching(true)}
                        ></box-icon>
                     </span>
                  )}
               </div>
               <div className="login hidden lg:block">
                  <button className="bg-lilac text-white p-2 px-4 rounded-full shadow">
                     Login
                  </button>
               </div>
            </div>
         </nav>

         <SidebarMenu dropmenu={dropmenu} currentMenu={currentMenu} />
      </>
   )
}

const SidebarMenu = ({ dropmenu, currentMenu }) => {
   return (
      <>
         {dropmenu && (
            <Sidebar>
               <h2 className="text-xl p-4">Menu</h2>
               <ul>
                  <li>
                     <Navigation
                        styling="px-4 py-2 block hover:bg-violet-200"
                        currentMenu={currentMenu}
                     />
                  </li>
               </ul>
            </Sidebar>
         )}
      </>
   )
}

const Navigation = ({ styling, currentMenu }) => {
   const dispatch = useDispatch()

   return (
      <>
         {menus.map((menu, i) => {
            return (
               <Link
                  key={i}
                  to={menu.path}
                  className={`${styling} ${
                     currentMenu === menu.name && 'font-bold'
                  }`}
                  onClick={() => dispatch(setCurrentMenu(menu.name))}
               >
                  {menu.name}
               </Link>
            )
         })}
      </>
   )
}

export default Navbar
