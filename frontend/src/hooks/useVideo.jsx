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
    return { getVideo, getSpecificVideo };
};
