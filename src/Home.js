import React from "react";
import "./Home.css";

import BlogPost from "./BlogPost";

const Home = ({ blog }) => {

    return (
        <div className="Home pt-5">
            {blog.length !== 0
                ? (blog.map(post => (
                    <BlogPost 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        body={post.body}
                    />
                )))
                : (<p>There are no posts currently available! Why not <a href="/new">contribute yourself?!</a></p>)
            }
        </div>
    )
}

export default Home;