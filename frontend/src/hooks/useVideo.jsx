export const useVideo = () => {
    const getVideo = async () => {
        const response = await fetch(`http://localhost:7000/api/video/`);
        const json = await response.json();
        return json;
    };

    const getSpecificVideo = async (id) => {
        const response = await fetch(`http://localhost:7000/api/video/${id}`);
        const json = await response.json();
        return json;
    };

    const getLikedVideo = async (userID) => {
        const response = await fetch(`http://localhost:7000/api/video/liked/${userID}`);
        const json = await response.json();
        return json;
    };

    const postLikeVideo = async (userID, videoID) => {
        const response = await fetch(`http://localhost:7000/api/video/like`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ userID, videoID }),
        });
        const json = await response.json();
        return json;
    };

    const likeVideo = async (id) => {
        const response = await fetch(`http://localhost:7000/api/video/like/${id}`, {
            method: 'PUT',
        });
        const json = await response.json();
        return json;
    };

    const getAllSubscribeVideo = async (userID) => {
        const response = await fetch(`http://localhost:7000/api/video/subscribed/all/${userID}`);
        const json = await response.json();
        return json;
    };

    const getSubscribeVideo = async (userID, channelID) => {
        const response = await fetch(
            `http://localhost:7000/api/video/subscribed?userID=${userID}&channelID=${channelID}`,
        );
        const json = await response.json();
        return json;
    };

    const subscribeVideo = async (userID, channelID) => {
        const response = await fetch(`http://localhost:7000/api/video/subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID, channelID }),
        });
        const json = await response.json();
        return json;
    };

    const viewVideo = async (id) => {
        const response = await fetch(`http://localhost:7000/api/video/view/${id}`, {
            method: 'PUT',
        });
        const json = await response.json();
        return json;
    };

    const searchVideo = async (query) => {
        const response = await fetch(`http://localhost:7000/api/video/search/${query}`);
        const json = await response.json();
        return json;
    };

    const getSavedVideo = async (userID) => {
        const response = await fetch(`http://localhost:7000/api/video//watchLater/${userID}`);
        const json = await response.json();
        return json;
    };

    const postSaveVideo = async (userID, videoID) => {
        const response = await fetch(`http://localhost:7000/api/video/watchLater`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID, videoID }),
        });
        const json = await response.json();
        return json;
    };

    const getWatchedVideo = async (userID) => {
        const response = await fetch(`http://localhost:7000/api/video/watched/${userID}`);
        const json = await response.json();
        return json;
    };

    const postWatchedVideo = async (userID, videoID) => {
        const response = await fetch(`http://localhost:7000/api/video/watched`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID, videoID }),
        });
        const json = await response.json();
        return json;
    };

    return {
        getVideo,
        getSpecificVideo,
        getLikedVideo,
        postLikeVideo,
        getAllSubscribeVideo,
        getSubscribeVideo,
        likeVideo,
        subscribeVideo,
        viewVideo,
        searchVideo,
        getSavedVideo,
        postSaveVideo,
        getWatchedVideo,
        postWatchedVideo,
    };
};
