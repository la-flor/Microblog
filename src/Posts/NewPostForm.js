import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import { useDispatch } from "react-redux";

const NewPostForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const INITIAL_DATA = {
        title: "",
        description: "",
        body: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ 
            type: "ADD_POST",
            newPostId: uuidv4(),
            newPost: {
                title: formData.title,
                description: formData.description,
                body: formData.body,
                comments: []
            }
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
        <div className="NewPostForm">
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
                <button type="submit" onClick={handleSubmit} className="btn btn-success">Save</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={goHome} className="btn btn-warning">Cancel</button>
            </form>
        </div>
    )
}

export default NewPostForm;