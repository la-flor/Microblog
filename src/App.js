import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";

function App() {
  const [blog, setBlog] = useState({
          "-a1ba-43c8-de80d9e89ccb-c3a476b2ee6f": {
              title: "Hypercode",
              description: "A beginners guide to coding",
              body: "To get the best out of coding you need to practice. Practice makes perfect.  Perfect is made by practice.  Keep practicing to get better.  Work on projects.... aka... practice.",
              comments: [{id: "abcnumber1", comment: "this is my first comment"},
                          {id: "xyznumber2", comment: "this is my second comment"}]
        }});

  function addPost(newPostId, newPost) {
    setBlog({...blog, [newPostId]: newPost});
  }

  function editPost(postId, updatedPost) {
    setBlog({ ...blog,
      [postId]: updatedPost})
  }

  function deletePost(idToRemove) {
    delete blog[idToRemove];
    setBlog(blog);
  }

  function createComment(comment) {
    const postId = comment.postId;
    const post = blog[postId];
    const updatedBlog = {
      ...blog,
      [postId]: {
        ...post,
        comments: [...post.comments, 
                    { id: comment.id,
                      comment: comment.comment }]
      }
    }
    setBlog(updatedBlog);
  }

  function deleteComment(postId, commentId) {
    const post = blog[postId];

    const updatedComments = post.comments.filter(comment => comment.id !== commentId);

    const updatedBlog = {
      ...blog,
      [postId]: {
        ...post,
        comments: updatedComments
      }
    }

    setBlog(updatedBlog);
  }

return (
  <div className="App">
    <Header />
      <BrowserRouter>
        <div className="App-body">
          <Routes 
              blog={blog} 
              addPost={addPost} 
              editPost={editPost} 
              deletePost={deletePost}
              createComment={createComment}
              deleteComment={deleteComment} />
        </div>
      </BrowserRouter>
  </div>
);
}

export default App;