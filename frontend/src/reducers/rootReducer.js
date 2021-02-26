import {
    GET_POST,
    DELETE_POST,
    ADD_POST,
    UPDATE_POST,
    ADD_COMMENT,
    DELETE_COMMENT
} from "../actions/types";

const INITIAL_STATE = {
    "-a1ba-43c8-de80d9e89ccb-c3a476b2ee6f": {
        title: "Hypercode",
        description: "A beginners guide to coding",
        body: "To get the best out of coding you need to practice. Practice makes perfect.  Perfect is made by practice.  Keep practicing to get better.  Work on projects.... aka... practice.",
        comments: [{ id: "abcnumber1", comment: "this is my first comment" },
        { id: "xyznumber2", comment: "this is my second comment" }]
    }
}

function rootReducer(state = INITIAL_STATE, action) {
    console.log("reducer ran; state & action", state, action);
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                [action.newPostId]: action.newPost
            }
        case DELETE_POST:
            const updatedBlog = { ...state };
            delete updatedBlog[action.postId];
            return updatedBlog;
        case UPDATE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...action.updatedPost,
                    comments: state[action.postId].comments
                }
            };
     
        case ADD_COMMENT:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    comments: [
                        ...state[action.postId].comments,
                        {
                            id: action.id,
                            comment: action.comment
                        }
                    ]
                }
            }


        case DELETE_COMMENT:
            return ( { 
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    comments: 
                        state[action.postId].comments.filter(comment => comment.id !== action.commentId)
                }
            }
            )
        default:
            return state;
    }
}

export default rootReducer;