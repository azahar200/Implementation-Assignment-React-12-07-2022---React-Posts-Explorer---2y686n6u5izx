import React, { useEffect, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom';

import '../styles/App.css';
import Loader from './Loader';

const Post = (props) => {
    let { id } = useParams();
    const [showLoader, setShowLoader] = useState(true);
    const [post, setPost]  = useState({})
    const [user, setUser]  = useState({})

    useEffect(() => {
        const url = ` https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setPost(data);
                // We get the userId
                const userUrl = `https://jsonplaceholder.typicode.com/users/${data.userId}`
                return fetch(userUrl);
            })
            .then(response => response.json())
            .then(userData => {
                setUser(userData);
                setShowLoader(false);
            })
    })
    
    return (
        <div>
            {showLoader && <Loader/>}

            <h1 className="post-id">Post id:- {id}</h1>

            <h2 className='post-title'>{post.title}</h2>

            <p className="post-body">{post.body} </p>

            <p className="post-author">{user.name}</p>

            <NavLink to="/" >Back Home</NavLink>
        </div>

    )
}


export default Post;