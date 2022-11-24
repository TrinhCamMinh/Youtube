import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useAuthContext } from '../hooks/useAuthContext';


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
    background-image: cover;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 20px;
`;

const ChannelName = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 24px;
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
    const { user } = useAuthContext();

    return (
        <Container>
            <Profile>
                <Profile>
                    <UserAvatar src={`http://localhost:5000/${user.avatar}`} />
                    <UserInfo>
                        <ChannelName>{user.channelName}</ChannelName>
                        <Username>@{user.userName}</Username>
                        <SubcriberCount>1000 subcribers</SubcriberCount>
                    </UserInfo>
                </Profile>
                <Profile>
                    <Button>Channel Configuration</Button>
                    <Button>Channel Manager</Button>
                </Profile>
            </Profile>
            <h2 style={{ 'font-size': '32px', 'font-weight': 'bold', 'margin-top': '50px' }}>Uploaded Video</h2>
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
