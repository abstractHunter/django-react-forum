import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function PostDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState([])

    const getPost = () => {
		fetch('http://127.0.0.1:8000/api/post/' + postId)
			.then((res) => res.json())
			.then((res) => {
                setPost(res)
		})
	}

    useEffect(() => {
		getPost()
	}, [])

    return (
        <div>
            <h2>{post.title}</h2>
            <h5>id author : {post.author}</h5>
            <p>{post.content}</p>
            <div>
                {/* <ul>
                    {
                        post.comments.map((comm, key) => (
                            <li key={key}>
                                {comm.content}
                            </li>
                        ))
                    }
                </ul> */}
            </div>
        </div>
    )
}

export default PostDetailPage