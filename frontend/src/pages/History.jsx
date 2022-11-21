import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 20vw;
    gap: 10;
`;

const PageHeading = styled.h1`
    color: white;
    margin-bottom: 50px;
`;

const DateGroup = styled.h3`
    color: white;
    margin-bottom: 10px;
`;

const Home = () => {
    return (
        <>
            <PageHeading>History</PageHeading>
            <DateGroup>Today</DateGroup>
            <Wrapper>
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
            </Wrapper>
        </>
    );
};

export default Home;
