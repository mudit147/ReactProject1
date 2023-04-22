import { useState } from "react";
import Modal from "./modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function nameChangeHandler(event) {
        setEnteredName(event.target.value);
    }

    let modalContent;

    if(modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
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