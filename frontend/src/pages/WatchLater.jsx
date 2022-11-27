import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useVideo } from '../hooks/useVideo';
import { useAuthContext } from '../hooks/useAuthContext';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 25vw;
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

const Short = styled.div``;

const Container = styled.div``;

const Home = () => {
    const { getSavedVideo, getSpecificVideo } = useVideo();
    const [saveVideoID, setSaveVideoID] = useState(null);
    const [saveVideo, setSaveVideo] = useState([]);
    const { user } = useAuthContext();

    const fetchSaveVideoID = async () => {
        if (user) {
            const data = await getSavedVideo(user._id);
            setSaveVideoID(data);
        }
    };

    const fetchSavedVideo = (saveVideoID) => {
        const fetch = async (id) => {
            const data = await getSpecificVideo(id);
            setSaveVideo((prev) => [...prev, data]);
        };
        if (saveVideoID) {
            saveVideoID.map((item) => fetch(item.videoID));
        }
    };

    useEffect(() => {
        fetchSaveVideoID();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchSavedVideo(saveVideoID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [saveVideoID]);

    return (
        <Box bg={useColorModeValue('white', 'black.200')}>
            <PageHeading>Watch Later</PageHeading>
            <Container>
                <Short></Short>
                <DateGroup>Today</DateGroup>
                <Wrapper>
                    {saveVideo &&
                        saveVideo.map((item, index) => {
                            return <Card key={index} item={item} />;
                        })}
                </Wrapper>
            </Container>
        </Box>
    );
};

export default Home;
