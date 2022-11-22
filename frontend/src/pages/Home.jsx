import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const VideoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const Home = () => {
    return (
        <>
            <Carousel />
            <VideoContainer>
                <Card />
                <Card />
                <Card />
                <Card />
            </VideoContainer>
        </>
    );
};

export default Home;
