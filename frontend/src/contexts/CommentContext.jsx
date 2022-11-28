import { createContext, useReducer } from 'react';

export const CommentContext = createContext();

export const CommentReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return {
                comment: action.payload,
            };
        case 'CREATE_COMMENT':
            return {
                comment: [action.payload, ...state.comment],
            };
        default:
            return state;
    }
};

export const CommentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CommentReducer, {
        comment: null,
    });

    console.log('CommentContext state', state);

    return <CommentContext.Provider value={{ ...state, dispatch }}>{children}</CommentContext.Provider>;
};
