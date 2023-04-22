import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onNameChange={nameChangeHandler}
  //       />
  //     </Modal>
  //   )
  // }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList 
        isPostingModal={modalIsVisible}
        onStopPostingModal={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
