import { Link } from 'react-router-dom'

const BrandIcon = ({ title, name, path }) => {
   return (
      <Link
         to={`https://${path}`}
         title={title}
         target="_blank"
         className="inline-block me-2"
      >
         <box-icon type="logo" name={name} color="white"></box-icon>
      </Link>
   )
}

export default BrandIcon
