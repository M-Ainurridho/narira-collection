import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const GuestLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <main className="">{children}</main>
      </>
   )
}

export default GuestLayout
