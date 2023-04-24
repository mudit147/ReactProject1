import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost( {onCancel, onAddPost} ) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function nameChangeHandler(event) {
        setEnteredName(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredName
        };
        onAddPost(postData);

        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="author">Your name</label>
                <input type="text" id="author" required onChange={nameChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;