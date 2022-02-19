import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

// restrict a route to user if a condition is not met
const PrivateRoute = () => {
    let {user} = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to="/signin" />
    
}

export default PrivateRoute;