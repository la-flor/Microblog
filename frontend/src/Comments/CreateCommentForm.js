import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CreateCommentForm.css"
import { useDispatch } from "react-redux";

const CreateCommentForm = ({ postId }) => {
    const INITIAL_DATA = {
        newComment: ""
    }
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(INITIAL_DATA);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_COMMENT",
            postId,
            id: uuidv4(),
            comment: formData.newComment
        })
        setFormData(INITIAL_DATA);
    }

    return (
        <div className="CreateCommentForm pt-3">
            <form className="form-group">
                <label htmlFor="newComment">New Comment: </label>
                <input
                    name="newComment"
                    type="text"
                    value={formData.newComment}
                    onChange={handleChange}
                    className="form-control"
                />
                <br />
                <button type="submit" onClick={handleSubmit} className="CreateCommentForm-submit mr-3 btn btn-info">Save</button>
            </form>
        </div>
    )
}

export default CreateCommentForm;