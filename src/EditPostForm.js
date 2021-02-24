import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./EditPostForm.css";

const EditPostForm = ({ editPost, id, title, description, body }) => {
    let history = useHistory();

    const INITIAL_DATA = {
        title,
        description,
        body
    }

    const [formData, setFormData] = useState(INITIAL_DATA)

    function handleSubmit(e) {
        e.preventDefault();
        editPost({
            id,
            title: formData.title,
            description: formData.description,
            body: formData.body
        })
        goHome();
    }

    function goHome() {
        setFormData(INITIAL_DATA);
        history.push("/");
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    return (
        <div className="EditPostForm">
            <form className="form-group">
                <label htmlFor="title">Title: </label>
                <input 
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-control"
                />

                <label htmlFor="description">Description: </label>
                <input 
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                />
                
                <label htmlFor="body">Body: </label>
                <input 
                    name="body"
                    type="text"
                    value={formData.body}
                    onChange={handleChange}
                    className="form-control"
                />
                <br/>
                <button type="submit" onClick={handleSubmit} className="EditPostForm-submit mr-3 btn btn-info">Save</button>
            </form>
        </div>
    )
}

export default EditPostForm;