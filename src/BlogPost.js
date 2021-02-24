import React from "react";
import "./BlogPost.css"

const BlogPost = ({id, title, description, body}) => {

    return (
        <div className="BlogPost p-5 my-3">
            <h3><a href={id}>{ title }</a></h3>
            <p><i>{ description }</i></p>
        </div>
    )
}

export default BlogPost;