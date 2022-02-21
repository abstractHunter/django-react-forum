import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({children}) => {
    // try to get authToken and user from user local storage
    let storedTokens = localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(() => storedTokens ? JSON.parse(storedTokens) : null)
    let [user, setUser] = useState(() => storedTokens ? jwt_decode(storedTokens) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/auth/login/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if (response.status === 200) {
            // update user informations and redirect them
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate("/")
        }
        else {
            alert("Something bad happened")
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate("/")
    }


    let logupUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/auth/register/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username': e.target.username.value,
                "email": e.target.email.value,
                "first_name": e.target.firstname.value,
                "last_name": e.target.lastname.value,
                'password': e.target.password.value,
                'password2': e.target.password2.value,
            })
        })
        let data = await response.json()

        if (response.status === 201) {
            // update user informations and redirect them
            console.log("data : ", data)
            navigate("/signin")
            alert("successfully registrated, now login to your account ...")
        }
        else {
            alert("Something bad happened")
        }
    }


    let updateToken = async ()=> {
        let response = await fetch('http://127.0.0.1:8000/auth/login/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else {
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        logupUser: logupUser,
    }

    useEffect(()=> {

        if(loading){
            updateToken()
        }

        // updae token every four minutes as access token lasts only for five minutes 
        let fourMinutes = 1000 * 60 * 4
        let interval =  setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? <p>loding, trying to connect to server ....</p> : children}
        </AuthContext.Provider>
    )
}
