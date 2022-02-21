import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

// restrict a route to user if a condition is not met


const PrivateRoute = (props) => {
    const shouldLogIn = props.shouldLogIn
    const redirectTo = props.redirectTo

    let {user} = useContext(AuthContext)
    let condition = shouldLogIn ? user : !user

    return condition ? <Outlet /> : <Navigate to={redirectTo} />
}

export default PrivateRoute;