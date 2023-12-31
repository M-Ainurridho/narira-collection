import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const GuestLayout = ({ children }) => {
   return (
      <div className="grid min-h-screen">
         <Navbar />
         <main className="">{children}</main>
         <Footer />
      </div>
   )
}

export default GuestLayout
