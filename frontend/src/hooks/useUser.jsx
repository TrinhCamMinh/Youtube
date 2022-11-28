import { useAuthContext } from '../hooks/useAuthContext';
export const useUser = () => {
    const { dispatch } = useAuthContext();
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

    const updateUserAccount = async (userID, userName, email, phoneNumber, location) => {
        const response = await fetch(`http://localhost:5000/api/user/update/${userID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, email, phoneNumber, location }),
        });
        const json = await response.json();
        if (response.ok) {
            console.log('update success');
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
        }
        return json;
    };

    return { getUser, getUserAvatar, getUserChannelName, updateUserAccount };
};
