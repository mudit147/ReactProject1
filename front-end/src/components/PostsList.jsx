import { useEffect } from "react";
import { useState } from "react";
import Modal from "./modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({ isPostingModal, onStopPostingModal }) {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPostingModal && (
                <Modal onClose={onStopPostingModal}>
                    <NewPost
                        onCancel={onStopPostingModal}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                <Post key={Math.random()} author={post.author} body={post.body} />
                ))}
            </ul>
            )}
            {posts.length === 0 && (
            <div style={{textAlign:'center', color:'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
            )}
        </>
    )
}

export default PostsList;