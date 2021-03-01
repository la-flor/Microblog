import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header p-5 mt-5 text-center">
            <h1>Microblog</h1>
            <p>Get in the Rithm of blogging!</p>
            <p>
                <b><a href="/">Blog</a></b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b><a href="/new">Add a new post</a></b>
            </p>
        </div>
    )
}

export default Header;