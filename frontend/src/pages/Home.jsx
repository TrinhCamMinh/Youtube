import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const VideoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Section = styled.h1`
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const Home = () => {
    return (
        <>
            <Section>Shorts</Section>
            <Carousel />
            <Section>Videos</Section>
            <VideoContainer>
                <Card />
            </VideoContainer>
        </>
    );
};

export default Home;
