import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";

import BlogPost from "../Posts/BlogPost";

const Home = () => {
    const blog = useSelector(store => store);

    return (
        <div className="Home pt-5">
            {Object.keys(blog).length !== 0
                ? (Object.keys(blog).map(postId => (
                    <BlogPost
                        key={postId}
                        postId={postId}
                        title={blog[postId].title}
                        description={blog[postId].description}
                    />
                )))
                : (<p>There are no posts currently available! Why not <a href="/new">contribute yourself?!</a></p>)
            }
        </div>
    )
}

export default Home;