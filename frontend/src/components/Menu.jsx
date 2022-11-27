import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LamaTube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Link } from 'react-router-dom';
import { Box, useColorMode, useColorModeValue, Divider } from '@chakra-ui/react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useVideo } from '../hooks/useVideo';
import { useUser } from '../hooks/useUser';

const Wrapper = styled.div`
    padding: 18px 26px;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px;
    border-radius: 10px;
    &:hover {
        background-color: rgba(9, 9, 9, 0.2);
    }
`;

const Login = styled.div``;
const Button = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    border: 2px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 30px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: red;
`;

const Menu = ({ lightMode, setLightMode }) => {
    const { user } = useAuthContext();
    const { getAllSubscribeVideo } = useVideo();
    const { getUser } = useUser();
    const { colorMode, toggleColorMode } = useColorMode();
    const [channelID, setChannelID] = useState(null);
    const [channel, setChannel] = useState([]);

    const fetchAllSubscribeChannel = async () => {
        if (user) {
            const data = await getAllSubscribeVideo(user._id);
            setChannelID(data);
        }
    };

    const fetchSubscribedChannel = (channelID) => {
        const fetch = async (userID) => {
            const data = await getUser(userID);
            setChannel((prev) => [...prev, data]);
        };
        if (channelID) {
            channelID.map((item) => fetch(item.channelID));
        }
    };

    useEffect(() => {
        fetchAllSubscribeChannel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchSubscribedChannel(channelID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [channelID]);

    return (
        <Box bg={useColorModeValue('white', 'black.200')}>
            <Wrapper>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo>
                        <Img src={LamaTube} />
                        DMTube
                    </Logo>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Item>
                        <HomeIcon />
                        Home
                    </Item>
                </Link>
                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon />
                    Subscriptions
                </Item>
                <Divider my={'2'} />
                <Link to='createShort' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Item>
                        <VideoLibraryOutlinedIcon />
                        Shorts
                    </Item>
                </Link>
                <Link to='history' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Item>
                        <HistoryOutlinedIcon />
                        History
                    </Item>
                </Link>
                <Link to='later' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Item>
                        <ScheduleIcon />
                        Watch later
                    </Item>
                </Link>
                <Link to='liked' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Item>
                        <ThumbUpOutlinedIcon />
                        Liked videos
                    </Item>
                </Link>
                {!user ? (
                    <>
                        <Divider />
                        <Login>
                            Sign in to do more
                            <Link to='signin' style={{ textDecoration: 'none' }}>
                                <Button>
                                    <AccountCircleOutlinedIcon />
                                    Sign In
                                </Button>
                            </Link>
                        </Login>
                    </>
                ) : null}
                <Divider my={'2'} />
                <Title>Subscribed Channel</Title>
                {channel &&
                    channel.map((item, index) => {
                        return (
                            <div
                                style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}
                                key={index}
                            >
                                <img
                                    style={{ borderRadius: '6px', width: '40px' }}
                                    src={`http://localhost:5000/${item.avatar}`}
                                    alt='channel avatar'
                                />
                                <h1>{item.channelName}</h1>
                            </div>
                        );
                    })}
                <Divider my={'2'} />
                <Title>Collections</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Divider my={'2'} />
                <Item
                    onClick={() => {
                        setLightMode(lightMode);
                        toggleColorMode();
                    }}
                >
                    <SettingsBrightnessOutlinedIcon />
                    {colorMode === 'light' ? 'Light' : 'Dark'} Mode
                </Item>
            </Wrapper>
            {/* </Container> */}
        </Box>
    );
};

export default Menu;
