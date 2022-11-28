import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useVideo } from '../hooks/useVideo';
import { useAuthContext } from '../hooks/useAuthContext';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
`;

const PageHeading = styled.h1`
    font-weight: bold;
    color: red;
    font-size: 32px;
    margin-bottom: 30px;
`;

const DateGroup = styled.h3`
    color: white;
    margin-bottom: 10px;
`;

const Home = () => {
    const { getWatchedVideo, getSpecificVideo } = useVideo();
    const { user } = useAuthContext();
    const [watchedVideoID, setWatchedVideoID] = useState(null);
    const [watchedVideo, setWatchedVideo] = useState([]);

    const fetchWatchedVideoID = async () => {
        if (user) {
            const data = await getWatchedVideo(user._id);
            setWatchedVideoID(data);
        }
    };

    const fetchWatchedVideo = (watchedVideoID) => {
        const fetch = async (id) => {
            const data = await getSpecificVideo(id);
            setWatchedVideo((prev) => [...prev, data]);
        };
        if (watchedVideoID) {
            watchedVideoID.map((item) => fetch(item.videoID));
        }
    };

    useEffect(() => {
        fetchWatchedVideoID();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchWatchedVideo(watchedVideoID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchedVideoID]);

    return (
        <>
            <PageHeading>History</PageHeading>
            <DateGroup>Today</DateGroup>
            <Wrapper>
                {watchedVideo &&
                    watchedVideo.map((item, index) => {
                        return <Card key={index} item={item} />;
                    })}
            </Wrapper>
        </>
    );
};

export default Home;
