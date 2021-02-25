import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import EditPostForm from "./EditPostForm";
import Comments from "./Comments";
import "./ViewPost.css"
import CreateCommentForm from "./CreateCommentForm";

const ViewPost = ({ blog, editPost, deletePost, createComment, deleteComment }) => {
    const history = useHistory();
    const { postId } = useParams();
    const post = blog[postId];
    const [editMode, setEditMode] = useState(false);

    if (!postId) {
        console.error("Blog post id parameter is invalid.")
        returnHome();
    }

    function handleDelete(e) {
        e.preventDefault();
        deletePost(postId);
        returnHome();
    }

    function returnHome() {
        history.push(`/`)
    }

    function toggleEditPostForm() {
        setEditMode(!editMode);
    }

    return (
        <div className="ViewPost p-5 my-3">
            <i className="ViewPost-DeleteIcon pl-2 fas fa-trash-alt" onClick={handleDelete}></i>
            <i className="ViewPost-EditIcon pr-2 fas fa-edit" onClick={toggleEditPostForm}></i>
            <h2>{ post.title }</h2>
            <p><i>{ post.description }</i></p>
            <p>{ post.body }</p>

            <div className="ViewPost-editor py-5">
                {editMode
                    &&
                        <EditPostForm 
                                postId={postId} 
                                title={post.title}
                                description={post.description}
                                body={post.body}
                                editPost={editPost}
                                deletePost={deletePost}
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
                                    comment={comment.comment}
                                    deleteComment={deleteComment} />)))
                        : (<p>There are no comments for this post yet.  Feel free to contribute below!</p>)
                        }
                </ul>
                <CreateCommentForm 
                        createComment={createComment}
                        postId={postId} />
            </div>
        </div>
    )
}

export default ViewPost;