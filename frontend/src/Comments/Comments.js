import React from "react";
import "./Comments.css";

const Comments = ({ comment, commentId, deleteComment }) => {
    function handleDelete() {
        deleteComment(commentId);
    }

    return (
        <li id={commentId}>{comment}
            <i className="Comments-DeleteIcon pl-2 fas fa-trash-alt"
                onClick={handleDelete}>
            </i>
        </li>
    )
}

export default Comments;