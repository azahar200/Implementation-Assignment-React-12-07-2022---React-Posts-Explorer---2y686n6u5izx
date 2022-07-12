import React, { useEffect, useState } from 'react'

import '../styles/App.css';
import Loader from './Loader';
import PostPreview from './PostPreview';

const Home = () => {

    const [buttonCount, setButtonCount] = useState(2);
    const [showLoader, setShowLoader] = useState(true);
    const [posts, setPosts] = useState([]);

    //https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(Array.isArray(data) && data.length > 0) {
                    // Set the pagination button count here
                    setButtonCount(data.length / 10);

                    // remove the loader component 
                    setShowLoader(false);

                    // picking the first 10 posts
                    const first_ten_posts = data.filter((item, index) => index < 10);
                    setPosts(first_ten_posts);
                }
            })
        
    })
    let buttonsArr = [...new Array(buttonCount)]
    //https://reactjs.org/docs/lists-and-keys.html
    const buttons = buttonsArr.map((item, index) => (
        <button id={`page-${index + 1}`}>{index + 1}</button>))

    const postPreviews = posts.map((item, index) => (
        <li><PostPreview class={index % 2 === 0 ? 'even': 'odd'} post={item} /></li>
    ))

    return (
        <div>
            {showLoader && <Loader/>}
            <ul id="postsList">
                {postPreviews}
            </ul>

            <div>{buttons}</div>
        </div>

    )
}


export default Home;