import { useSelector } from 'react-redux'

const Dashboard = () => {
   const { isLogin, user } = useSelector((state) => state.auth)

   console.log({ isLogin, user })
   return (
      <>
         <h1>Member Dashboard</h1>
      </>
   )
}

export default Dashboard
