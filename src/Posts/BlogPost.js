import React from "react";
import "./BlogPost.css"

const BlogPost = ({postId, title, description}) => {

    return (
        <div className="BlogPost p-5 my-3">
            <h3><a href={postId}>{ title }</a></h3>
            <p><i>{ description }</i></p>
        </div>
    )
}

export default BlogPost;