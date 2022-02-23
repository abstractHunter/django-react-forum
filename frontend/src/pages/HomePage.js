import React, {useEffect, useState} from 'react'
import PostCard from '../components/PostCard'

function HomePage() {
	const [posts, setPosts] = useState([])

	const getPosts = () => {
		fetch('http://127.0.0.1:8000/api/post/')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setPosts(res)
		})
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<>
			{posts.map((item, i) => {
				return ( 
					<PostCard 
						key={i}
						title={item.title}
						content={item.content}
						author={item.author}
						date={item.created_at}
					/>
				)
			})}
		</>

	)
}

export default HomePage