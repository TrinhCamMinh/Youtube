import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '360px'};
    margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
    cursor: pointer;
    display: ${(props) => props.type === 'sm' && 'flex'};
    gap: 5px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
    background-color: #999;
    flex: 1;
    border-radius: 15px;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== 'sm' && '14px'};
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;

const Title = styled.p`
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin: 2px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.textSoft};
`;

const VideoDataMock = [
    {
        id: 1,
        image: 'https://i.ytimg.com/vi/y66RgYMAgSo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvtAGde-6UOzNKyisfsy-tIdTwJQ',
        creatorAvatar:
            'https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj',
        title: 'React NodeJS Ecommerce App Fullstack',
        creator: 'lamadev',
        viewCount: '1000000',
        createTime: '1 days ago',
    },
    {
        id: 2,
        image: 'https://i.ytimg.com/vi/y66RgYMAgSo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvtAGde-6UOzNKyisfsy-tIdTwJQ',
        creatorAvatar:
            'https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj',
        title: 'React NodeJS Ecommerce App Fullstack',
        creator: 'lamadev',
        viewCount: '1000000',
        createTime: '1 days ago',
    },
    {
        id: 3,
        image: 'https://i.ytimg.com/vi/y66RgYMAgSo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvtAGde-6UOzNKyisfsy-tIdTwJQ',
        creatorAvatar:
            'https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj',
        title: 'React NodeJS Ecommerce App Fullstack',
        creator: 'lamadev',
        viewCount: '1000000',
        createTime: '1 days ago',
    },
];

const Card = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        setVideos(VideoDataMock);
    };

    useLayoutEffect(() => {
        getVideos();
    });

    const DisplayVideos = (videos) => {
        if (!videos.length) return null;

        console.log(videos.length);

        return videos.map((video, index) => (
            <CardItem
                key={index}
                // link={video.link}
                creatorAvatar={video.creatorAvatar}
                creator={video.creator}
                createTime={video.createTime}
                viewCount={video.viewCount}
                title={video.title}
                image={video.imageSrc}
            />
        ));
    };

    const CardItem = (video,{type}) => {
        <Link to='/video/test' style={{ textDecoration: 'none' }}>
            <Container type={type} key={video.id}>
                <Image type={type} src={video.image} />
                <Details type={type}>
                    <ChannelImage type={type} src={video.creatorAvatar} />
                    <Texts>
                        <Title>{video.title}</Title>
                        <ChannelName>{video.creator}</ChannelName>
                        <Info>
                            {video.viewCount} views • {video.createTime}
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>;
    };

    return <>{DisplayVideos(videos)}</>;
};
export default Card;
