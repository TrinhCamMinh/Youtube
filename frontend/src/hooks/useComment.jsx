export const useComment = () => {
    const getComment = async (videoID) => {
        const response = await fetch(`http://localhost:4000/api/comment/${videoID}`);
        const json = await response.json();
        return json;
    };

    const postComment = async (videoID, userID, commentAvatar, commentContent) => {
        const response = await fetch(`http://localhost:4000/api/comment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoID, userID, commentAvatar, commentContent }),
        });
        const json = await response.json();
        return json;
    };
    return { getComment, postComment };
};
