import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import EditPostForm from "./EditPostForm";
import Comments from "../Comments/Comments";
import "./ViewPost.css"
import CreateCommentForm from "../Comments/CreateCommentForm";
import { fetchPost, removePost, deleteComment } from "../actions/posts";

import { useSelector, useDispatch } from "react-redux";

const ViewPost = () => {
    const { postId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    if (!postId) {
        console.error("Blog post id parameter is invalid.")
        returnHome();
    }

    const post = useSelector(post => post.postsReducer);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchPost(postId));
        setLoading(false);
    }, [dispatch, postId, isLoading])

    function returnHome() {
        history.push(`/`)
    }

    function deletePost() {
        setLoading(true);
        dispatch(removePost(postId));
        setLoading(false)
        returnHome();
    }

    function removeComment(commentId) {
        setLoading(true);
        dispatch(deleteComment(postId, commentId));
        setLoading(false);
    }

    const [editMode, setEditMode] = useState(false);

    function toggleEditPostForm() {
        setEditMode(!editMode);
    }

    return (
        <div className="ViewPost p-5 my-3">
            <i className="ViewPost-DeleteIcon pl-2 fas fa-trash-alt" onClick={deletePost}></i>
            <i className="ViewPost-EditIcon pr-2 fas fa-edit" onClick={toggleEditPostForm}></i>
            <h2>{post.title}</h2>
            <p><i>{post.description}</i></p>
            <p>{post.body}</p>

            <div className="ViewPost-editor py-5">
                {editMode
                    &&
                    <EditPostForm
                        postId={postId}
                        title={post.title}
                        description={post.description}
                        body={post.body}
                    />
                }
            </div>
            <hr />
            <div className="ViewPost-comments mt-5">
                <h3>Comments:</h3>
                <ul>
                    {post.comments
                        ? (post.comments.map(comment => (
                            <Comments
                                key={comment.id}
                                postId={postId}
                                commentId={comment.id}
                                comment={comment.text}
                                deleteComment={removeComment} />)))
                        : (<p>There are no comments for this post yet.  Feel free to contribute below!</p>)
                    }
                </ul>
                <CreateCommentForm
                    postId={postId} />
            </div>
        </div>
    )
}

export default ViewPost;