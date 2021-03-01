import {
    FETCH_TITLES,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE
} from "../actions/types";

export default function postsReducer(state = {}, action) {
    console.log("title reducer ran", state, action);
    switch (action.type) {
        case FETCH_TITLES:
            return action.titles;

        case ADD_POST:
            return {
                ...state,
                [action.newPostId]: action.newPost
            }

        case DELETE_POST:
            let posts = { ...state };
            delete posts[action.postId];
            return posts;

        case UPDATE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...action.updatedPost,
                    comments: state[action.postId].comments
                }
            };

        case VOTE:
            return {
                ...state,
                [action.postId]: {
                    ...action.postId,
                    votes: action.votes
                }
            }

        default:
            return state;
    }
}