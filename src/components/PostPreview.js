import React from 'react'
import {  NavLink, useParams } from 'react-router-dom';

const PostPreview = ({ post }) => {
    
    return (
        <div className="post-preview">
            <h2 className="post-title">
                <NavLink to={`post/${post.id}`}>{post.title}</NavLink>
            </h2>
        </div>

    )
}


export default PostPreview;import React from 'react'
import {  NavLink, useParams } from 'react-router-dom';

const PostPreview = ({ post }) => {
    
    return (
        <div className="post-preview">
            <h2 className="post-title">
                <NavLink to={`post/${post.id}`}>{post.title}</NavLink>
            </h2>
        </div>

    )
}


export default PostPreview;