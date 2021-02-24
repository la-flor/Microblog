import React from "react";

const Header = () => {
    return (
        <div className="Header text-center">
            <h1>Microblog</h1>
            <p>Get in the Rithm of blogging!</p>
            <p>
                <a href="/">Blog</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/new">Add a new post</a>
            </p>
        </div>
    )
}

export default Header;