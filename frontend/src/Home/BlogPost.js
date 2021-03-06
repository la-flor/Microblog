import React from "react";
import "./BlogPost.css";

const BlogPost = ({ titleId, title, votes, description, vote }) => {

    return (
        <div id={titleId} className="BlogPost p-5 my-3">
            <h3><a href={titleId}>{title}</a></h3>
            <p><i>{description}</i></p>
            <span className="BlogPost-voteCount mr-3">{votes} votes</span>
            <span className="BlogPost-thumbsUp mr-3" onClick={e => vote(titleId, "up")}><i className="fas fa-thumbs-up"></i></span>
            <span className="BlogPost-thumbsDown" onClick={e => vote(titleId, "down")}><i className="fas fa-thumbs-down"></i></span>
        </div>
    )
}

export default BlogPost;