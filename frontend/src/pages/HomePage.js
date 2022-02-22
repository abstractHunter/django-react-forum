import React, {useEffect, useState} from 'react'

function HomePage() {
	const [posts, setPosts] = useState([])

	const getPosts = () => {
		fetch('http://127.0.0.1:8000/api/post/all')
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				setPosts(res)
		})
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<>
			<h2>HomePage</h2>

			<h3>List of posts</h3>

			<ul>
				{posts.map((item, i) => {
					return ( 
						<li key={i}>
							<h4>{item.title}</h4>
						</li>
					)
				})}
			</ul>
		</>

	)
}

export default HomePage