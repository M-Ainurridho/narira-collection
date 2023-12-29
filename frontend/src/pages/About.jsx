import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentMenu } from '../redux/reducers'

const About = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setCurrentMenu('Tentang Kami'))
   }, [])

   return (
      <>
         <h1>About Page</h1>
      </>
   )
}

export default About
