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

    const likeVideo = async (id) => {
        const response = await fetch(`http://localhost:7000/api/video/like/${id}`, {
            method: 'PUT',
        });
        const json = await response.json();
        if (!response.ok) console.log('like fail');
        else console.log('like success');
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

    return { getVideo, getSpecificVideo, likeVideo, viewVideo, searchVideo };
};
