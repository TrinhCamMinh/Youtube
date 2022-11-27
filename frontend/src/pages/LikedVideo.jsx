import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import Card from '../components/Card';
import { useVideo } from '../hooks/useVideo';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
`;

const PageHeading = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: red;
    margin-bottom: 30px;
`;

const DateGroup = styled.h3`
    color: white;
    margin-bottom: 10px;
`;

const Home = () => {
    const { getLikedVideo, getSpecificVideo } = useVideo();
    const [videoID, setVideoID] = useState(null);
    const [video, setVideo] = useState([]);
    const { user } = useAuthContext();

    const fetchAllLikedVideoID = async () => {
        if (user) {
            const data = await getLikedVideo(user._id);
            setVideoID(data);
        }
    };

    const fetchLikedVideo = (videoID) => {
        const fetch = async (id) => {
            const data = await getSpecificVideo(id);
            setVideo((prev) => [...prev, data]);
        };

        if (videoID) {
            videoID.map((item) => fetch(item.videoID));
        }
    };

    useEffect(() => {
        fetchAllLikedVideoID();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchLikedVideo(videoID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoID]);

    return (
        <>
            {console.log(video)}
            <PageHeading>Liked Video</PageHeading>
            <DateGroup>Today</DateGroup>
            <Wrapper>
                {video &&
                    video.map((item, index) => {
                        return <Card key={index} item={item} />;
                    })}
            </Wrapper>
        </>
    );
};

export default Home;
