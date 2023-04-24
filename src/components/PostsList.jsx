import { useState } from "react";
import Modal from "./modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({ isPostingModal, onStopPostingModal }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(newPost) {
        setPosts((existingPosts) => [newPost, ...existingPosts]);
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
            {posts.length > 0 &&
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={Math.random()} author={post.author} body={post.body} />)}
            </ul>
            }
            {posts.length === 0 &&
            <div style={{textAlign:'center', color:'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
            }
        </>
    )
}

export default PostsList;