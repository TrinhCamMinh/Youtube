import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 20vw;
`;

const PageHeading = styled.h1`
    color: white;
    margin-bottom: 50px;
`;

const DateGroup = styled.h3`
    color: white;
    margin-bottom: 10px;
`;

const Short = styled.div``;

const Container = styled.div``;

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
