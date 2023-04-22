import { useState } from "react";
import Modal from "./modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList( {isPostingModal, onStopPostingModal} ) {
    // const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function nameChangeHandler(event) {
        setEnteredName(event.target.value);
    }

    let modalContent;

    if(isPostingModal) {
        modalContent = (
            <Modal onClose={onStopPostingModal}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onNameChange={nameChangeHandler}
                />
            </Modal>    
        )
    }

    return (
        <>
            {modalContent}

            <ul className={classes.posts}>
                <Post author={enteredName} body={enteredBody} />
                <Post author="mittal" body="you're gonna be a react expert!" />
            </ul>
        </>
    )
}

export default PostsList;