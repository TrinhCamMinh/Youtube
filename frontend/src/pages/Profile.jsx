import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserAvatar = styled.img`
    height: 88px;
    width: 88px;
    border-radius: 50px;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: white;
    margin-left: 20px;
`;

const ChannelName = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 24px;
    color: inherit;
`;

const Username = styled.p`
    font-weight: 300;
    font-size: 12px;
    margin: 10px 0px;
`;

const SubcriberCount = styled.p`
    font-weight: 300;
    font-size: 12px;
    margin: 0;
`;

const Button = styled.div`
    background-color: #3ea6ff;
    padding: 10px 15px;
    border-radius: 50px;
    color: black;
    margin-left: 10px;
    font-weight: 500;
    height: 20px;
    font-size: 14px;
`;

const Home = () => {
    return (
        <Container>
            <Profile>
                <Profile>
                    <UserAvatar src='https://yt3.ggpht.com/ytc/AMLnZu9MVaiIkAm5yL-93ZWLNrhOUBCfy1mgt59pVVNr-Dk=s88-c-k-c0x00ffffff-no-rj' />
                    <UserInfo>
                        <ChannelName>tgound</ChannelName>
                        <Username>@tgound1403</Username>
                        <SubcriberCount>1000 subcribers</SubcriberCount>
                    </UserInfo>
                </Profile>
                <Profile>
                    <Button>Channel Configuration</Button>
                    <Button>Channel Manager</Button>
                </Profile>
            </Profile>
            <h2 style={{ color: 'white', margin: '50px 0 10px 0' }}>Uploaded Video</h2>
            <Wrapper>
                <Card />
                <Card />
                <Card />
                <Card />
            </Wrapper>
        </Container>
    );
};

export default Home;
