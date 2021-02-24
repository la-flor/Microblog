import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import ViewPost from "./ViewPost";

const Routes = ({ blog, addPost, editPost, deletePost }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home blog={blog} />
            </Route>
            <Route exact path="/new">
                <NewPostForm addPost={addPost} />
            </Route>
            <Route exact path="/:id">
                <ViewPost blog={blog} editPost={editPost} deletePost={deletePost} />
            </Route>
        </Switch>
    )
}

export default Routes;