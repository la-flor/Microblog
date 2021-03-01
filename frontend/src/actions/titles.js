import axios from "axios";
import {
    FETCH_TITLES,
    VOTE
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function fetchTitles() {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(API_URL);
            dispatch(getTitles(data));
        } catch (err) {
            console.error("An error occured while retrieving the blog data: ", err)
        }
    }
}

export function changeVote(postId, direction) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`${API_URL}/${postId}/vote/${direction}`);
            return dispatch(updateVotes(postId, data.votes));
        } catch (err) {
            console.error("An error occured while sending an upVote request to the server.", err);
        }
    };
}

function getTitles(titles) {
    return {
        type: FETCH_TITLES,
        titles
    }
}

function updateVotes(postId, votes) {
    return {
        type: VOTE,
        postId,
        votes
    }
}