import { useCommentContext } from '../hooks/useCommentContext';
export const useComment = () => {
    const { dispatch } = useCommentContext();
    const getComment = async (videoID) => {
        const response = await fetch(`http://localhost:4000/api/comment/${videoID}`);
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'SET_COMMENT', payload: json });
        }
    };

    const postComment = async (videoID, userID, commentAvatar, commentContent) => {
        const response = await fetch(`http://localhost:4000/api/comment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoID, userID, commentAvatar, commentContent }),
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'CREATE_COMMENT', payload: json });
        }
    };
    return { getComment, postComment };
};
