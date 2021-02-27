import {
    GET_POST,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    DELETE_COMMENT
} from "../actions/types";

export default function postsReducer(state = {}, action) {
    console.log("reducer ran; state & action", state, action);
    switch (action.type) {
        case GET_POST:
            return action.post;
            
        case ADD_POST:
            return {
                ...state,
                [action.newPostId]: { ...action.newPost, comments: [] }
            }

        case DELETE_POST:
            let posts = { ...state };
            delete posts[action.postId];
            return posts;

        case ADD_COMMENT:
            return {
                ...state,
                comments: 
                    [
                        ...state.comments, 
                        {
                            id: action.id,
                            text: action.text
                        }
                    ]
            };

        case DELETE_COMMENT:
            return ({
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.commentId)
            })

        default:
            return state;
    }
}