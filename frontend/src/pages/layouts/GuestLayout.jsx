import { Link } from 'react-router-dom'

const GuestLayout = ({ children }) => {
   return (
      <>
         {children}

         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
      </>
   )
}

export default GuestLayout
