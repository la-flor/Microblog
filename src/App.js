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
          body: "To get the best out of coding you need to practice. Practice makes perfect.  Perfect is made by practice.  Keep practicing to get better.  Work on projects.... aka... practice.",
          comments: [{id: "abcnumber1", comment: "this is my first comment"},
                      {id: "xyznumber2", comment: "this is my second comment"}]
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

  function createComment(comment) {
    setBlog(blog.map(post => {
      if(post.id === comment.postId) {
        post.comments.push({id: comment.id, comment: comment.comment})
        return post
      } else {
        return post
      }
    }));
  }

  function deleteComment(postId, commentId) {
    setBlog(blog.map(post => {
      if(post.id === postId) {
        /* if the post id matchest the target post id
            change the comments in that post to remove the target comment by id*/
        post.comments = post.comments.filter(comment => comment.id !== commentId);
      }
      return post;
    }));
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