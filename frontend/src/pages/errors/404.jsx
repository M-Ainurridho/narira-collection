import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div className="text-center mt-10">
         <h1 className="text-5xl mb-5">404, Not Found</h1>
         <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 duration-100"
         >
            Go back
         </Link>
      </div>
   )
}

export default NotFound
