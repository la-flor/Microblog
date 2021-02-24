import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";

function App() {
  const [blog, setBlog] = useState([
        { id: "-a1ba-43c8-de80d9e89ccb-c3a476b2ee6f",
          title: "Hypercode",
          description: "A beginners guide to coding",
          body: "To get the best out of coding you need to practice. Practice makes perfect.  Perfect is made by practice.  Keep practicing to get better.  Work on projects.... aka... practice."
        }]);

  function addPost(newPost) {
    setBlog([...blog, newPost]);
  }

  function editPost(updatedPost) {
    setBlog(blog.map(post => (
      post.id === updatedPost.id
        ? updatedPost
        : post
    )))
  }

  function deletePost(idToRemove) {
    setBlog(blog.filter(post => post.id !== idToRemove))
  }

return (

  <div className="App">
    <Header />
      <BrowserRouter>
        <div className="App-body">
          <Routes blog={blog} addPost={addPost} editPost={editPost} deletePost={deletePost} />
        </div>
      </BrowserRouter>
  </div>
);
}

export default App;