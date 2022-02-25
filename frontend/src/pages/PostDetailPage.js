import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import CommentCard from '../components/CommentCard';
import Loader from '../components/Loader';


function PostDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    const getPost = () => {
		fetch('http://127.0.0.1:8000/api/post/' + postId)
			.then((res) => res.json())
			.then((res) => {
                setPost(res)
                setLoading(false)
		})
	}

    useEffect(() => {
		getPost()
	},[])

    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <h4>author : {post.author}</h4>
                        <p>{post.content}</p>
                        <div>
                            <h4>Comments</h4>
                            {
                                loading ? (
                                    <p>loading</p>
                                ) : (
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        {
                                            post.comments.map((comm, key) => (
                                                <CommentCard key={key} author={comm.author} content={comm.content}/>       
                                            ))
                                        }
                                    </List>
                                )
                            }
                            
                        </div>
                    </>
                )
            }
            <h2>{post.title}</h2>
        </div>
    )
}

export default PostDetailPage