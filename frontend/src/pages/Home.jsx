import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useVideo } from '../hooks/useVideo';

const VideoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 19px;
`;

const Section = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    color: red;
`;

const Home = () => {
    const [videos, setVideos] = useState(null);
    const { getVideo } = useVideo();
    const getData = async () => {
        const data = await getVideo();
        setVideos(data);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box bg={useColorModeValue('gray.50', 'black.200')}>
            <Section>Shorts</Section>
            <Carousel />
            <Section>Videos</Section>
            <VideoContainer>
                {videos &&
                    videos.map((item, index) => {
                        return <Card key={index} item={item} />;
                    })}
            </VideoContainer>
        </Box>
    );
};

export default Home;
