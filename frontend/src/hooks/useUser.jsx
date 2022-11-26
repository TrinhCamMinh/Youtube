export const useUser = () => {
    const getUser = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const json = await response.json();
        return json;
    };

    const getUserAvatar = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const json = await response.json();
        return json.avatar;
    };

    const getUserChannelName = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const json = await response.json();
        return json.channelName;
    };

    return { getUser, getUserAvatar, getUserChannelName };
};
