import { useAuthContext } from '../hooks/useAuthContext';
export const useSubscribe = () => {
    const { user } = useAuthContext();

    const getSubscribe = async () => {
        const response = await fetch(`http://localhost:7000/api/video/subscribed/${user._id}`);
        const json = response.json();
        return json;
    };

    const postSubscribe = async (userID, videoID) => {
        const response = await fetch(`http://localhost:7000/api/video/subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID, videoID }),
        });
        const json = await response.json();
        return json;
    };

    return { getSubscribe, postSubscribe };
};
