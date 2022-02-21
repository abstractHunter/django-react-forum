import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function HomePage() {
	const {user} = useContext(AuthContext)

	return (
		<>
			<div>HomePage</div>
			{
				user && (
					<button>New post</button>
				)
			}
		</>

	)
}

export default HomePage