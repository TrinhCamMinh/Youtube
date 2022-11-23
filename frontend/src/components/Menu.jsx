import React from 'react';
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
import { useColorMode } from '@chakra-ui/react';

const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100%;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 300;
    position: sticky;
    top: 0;
`;
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
        background-color: ${({ theme }) => theme.soft};
    }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 30px;
    font-weight: 300;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`;

const Menu = ({ lightMode, setLightMode }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo>
                        <Img src={LamaTube} />
                        DMT
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
                <Hr />
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
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
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to='signin' style={{ textDecoration: 'none' }}>
                        <Button>
                            <AccountCircleOutlinedIcon />
                            Sign In
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>Subcribed Channel</Title>
                <Item></Item>
                <Item></Item>
                <Hr />
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
                <Hr />
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
        </Container>
    );
};

export default Menu;
