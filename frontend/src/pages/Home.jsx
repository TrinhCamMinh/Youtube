import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const VideoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 19px;
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </VideoContainer>
        </>
    );
};

export default Home;
