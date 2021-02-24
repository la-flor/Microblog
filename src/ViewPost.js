import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import EditPostForm from "./EditPostForm"
import "./ViewPost.css"

const ViewPost = ({ blog, editPost, deletePost }) => {
    const history = useHistory();
    const { id } = useParams();
    const post = blog.filter(post => post.id === id)[0];
    const [editMode, setEditMode] = useState(false);

    if (!post) {
        console.error("Blog post id parameter is invalid.")
        returnHome();
    }

    function handleDelete(e) {
        e.preventDefault();
        deletePost(id);
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
            <i class="ViewPost-DeleteIcon pl-2 fas fa-trash-alt" onClick={handleDelete}></i>
            <i className="ViewPost-EditIcon pr-2 fas fa-edit" onClick={toggleEditPostForm}></i>
            <h3>{ post.title }</h3>
            <p><i>{ post.description }</i></p>
            <p>{ post.body }</p>

            <div className="ViewPost-editor">
                {editMode
                    &&
                        <EditPostForm 
                                id={post.id} 
                                title={post.title}
                                description={post.description}
                                body={post.body}
                                editPost={editPost}
                                deletePost={deletePost}
                        />
                    }
            </div>
        </div>
    )
}

export default ViewPost;