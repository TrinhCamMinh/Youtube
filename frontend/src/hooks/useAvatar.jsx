export const useAvatar = () => {
    const getUserAvatar = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const json = await response.json();
        return json.avatar;
    };
    return { getUserAvatar };
};
