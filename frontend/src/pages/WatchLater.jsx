import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Box, useColorModeValue } from '@chakra-ui/react';

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
    return (
        <Box bg={useColorModeValue('white', 'black.200')}>
            <PageHeading>Watch Later</PageHeading>
            <Container>
                <Short></Short>
                <DateGroup>Today</DateGroup>
                <Wrapper>
                    <Card type='sm' />
                    <Card type='sm' />
                    <Card type='sm' />
                    <Card type='sm' />
                    <Card type='sm' />
                    <Card type='sm' />
                </Wrapper>
            </Container>
        </Box>
    );
};

export default Home;
