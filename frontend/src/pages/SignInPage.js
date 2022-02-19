import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function SignInPage() {
	let {loginUser} = useContext(AuthContext)

	return (
		<div>
			<form onSubmit={loginUser}>
				<input type="text" name='username' placeholder='Enter your username' />
				<input type="password" name='password' placeholder='Enter your password' />
				<input type="submit" value="Log In" />
			</form>
		</div>
	)
}

export default SignInPage