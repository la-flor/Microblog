import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import NewPostForm from "../Posts/NewPostForm";
import ViewPost from "../Posts/ViewPost";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/new">
                <NewPostForm />
            </Route>
            <Route exact path="/:postId">
                <ViewPost />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;