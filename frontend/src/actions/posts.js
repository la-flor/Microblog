import axios from "axios";
import {
    GET_POST,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    DELETE_COMMENT
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function fetchPost(postId) {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`${API_URL}/${postId}`);
            dispatch(getPost(data));
        } catch (err) {
            console.error("An error occured while retrieving the post data: ", err);
        }
    }
}

export function addPost(newPostData) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`${API_URL}`, newPostData);
            dispatch(createPost(data))
        } catch (err) {
            console.error(`An error occured while trying to send new post data to the server.`, err);
        }
    }
}

export function removePost(postId) {
    return async function () {
        try {
            await axios.delete(`${API_URL}/${postId}`);
            return deletePost(postId);
        } catch (err) {
            console.error(`An error occured while trying to delete post with ID = ${postId}`, err);
        }
    }
}

export function updatePost(postId, updatedPost) {
    return async function (dispatch) {
        try {
            await axios.put(`${API_URL}/${postId}`, updatedPost);
        } catch (err) {
            console.error(`An error occured while trying to delete post with ID = ${postId}`, err);
        }
    }
}

export function addComment(postId, text) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`${API_URL}/${postId}/comments`, { text });
            dispatch(createCommment(postId, data));
        } catch (err) {
            console.error(`An error occured while trying to create a new comment, ${text}, for post, ${postId}.`, err);
        }
    }
}

export function deleteComment(postId, commentId) {
    return async function (dispatch) {
        try {
            await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
            dispatch(removeComment(commentId));
        } catch (err) {
            console.error(`An error occured while trying to delete comment with ID: ${commentId}, for post, ${postId}.`, err);
        }
    }
}

function getPost(post) {
    return {
        type: GET_POST,
        post
    }
}

function createPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

function removeComment(commentId) {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

function createCommment(postId, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        id: comment.id,
        text: comment.text
    }
}