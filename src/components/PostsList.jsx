import { useState } from "react";
import Modal from "./modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({ isPostingModal, onStopPostingModal }) {
    return (
        <>
            {isPostingModal && (
                <Modal onClose={onStopPostingModal}>
                    <NewPost
                        onCancel={onStopPostingModal}
                    />
                </Modal>
            )}

            <ul className={classes.posts}>
                <Post author="mittal" body="you're gonna be a react expert!" />
            </ul>
        </>
    )
}

export default PostsList;