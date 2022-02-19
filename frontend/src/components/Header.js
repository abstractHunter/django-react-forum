import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Header() {
    const {user, logoutUser} = useContext(AuthContext)

    return (
        <div>
            <Link to="/">home</Link>
            <span>  |  </span>
            {user ? (
                    <span onClick={logoutUser}>Logout</span>
                ) : (
                    <>
                        <Link to="/signin">login</Link>
                        <span>  |  </span>
                        <Link to="/signup">log up</Link>
                    </>
                    
                )
            }

            {user && <h4>Hello, {user.username}</h4>}
        </div>
    )
}

export default Header