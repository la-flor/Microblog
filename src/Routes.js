import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import ViewPost from "./ViewPost";

const Routes = ({ blog, addPost, editPost, deletePost,  createComment, deleteComment }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home blog={blog} />
            </Route>
            <Route exact path="/new">
                <NewPostForm addPost={addPost} />
            </Route>
            <Route exact path="/:postId">
                <ViewPost 
                        blog={blog} 
                        editPost={editPost} 
                        deletePost={deletePost}  
                        createComment={createComment}
                        deleteComment={deleteComment} />
            </Route>
        </Switch>
    )
}

export default Routes;