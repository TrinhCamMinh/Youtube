export const useComment = () => {
    const getComment = async (videoID) => {
        const response = await fetch(`http://localhost:4000/api/comment/${videoID}`);
        const json = await response.json();
        return json;
    };
    return { getComment };
};
