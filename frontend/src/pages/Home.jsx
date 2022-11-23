import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import {Box, useColorModeValue} from '@chakra-ui/react';

const VideoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 19px;
`;

const Section = styled.h1`
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Home = () => {
    return (
        <Box bg={useColorModeValue('gray.50', 'black.200')}>
            <Section>Shorts</Section>
            <Carousel />
            <Section>Videos</Section>
            <VideoContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </VideoContainer>
        </Box>
    );
};

export default Home;
