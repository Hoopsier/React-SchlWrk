import React, { useState, useEffect } from "react";

const Posts = () => {
        const [posts, setPosts] = useState([]);
        const [showPosts, setShowPosts] = useState(false);
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(data => setPosts(data));
        }, []
        );
        return (
                <div>
                        <h1 onClick={() => setShowPosts(!showPosts)}>Posts</h1>
                        {
                                showPosts && posts && posts.map(p =>
                                        <div className="posts" key={p.id}>

                                                <p>Title is: <br />{p.title}</p>
                                                <p>Body is: <br />{p.body}</p>
                                        </div>
                                )
                        }
                </div>
        );
}
export default Posts;