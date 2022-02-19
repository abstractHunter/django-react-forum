import React, { useContext }  from 'react'
import AuthContext from '../context/AuthContext'

function SignUpPage() {
  	let {logupUser} = useContext(AuthContext)

	return (
		<div>
			<form onSubmit={logupUser}>
				<input type="text" name='username' placeholder='Enter your username' required/>
				<input type="email" name='email' placeholder='Enter your email' required/>
				<input type="text" name='firstname' placeholder='Enter your firstname' required/>
				<input type="text" name='lastname' placeholder='Enter your lastname' required/>
				<input type="password" name='password' placeholder='Enter your password' required/>
				<input type="password" name='password2' placeholder='Confirm your password' required/>
				<input type="submit" value="Log Up" />
			</form>
		</div>
	)
}

export default SignUpPage