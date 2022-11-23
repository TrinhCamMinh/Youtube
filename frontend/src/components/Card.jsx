import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VideoDataMock } from '../data';

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

const Card = () => {
    const [videos, setVideos] = useState(null);

    const getData = async () => {
        const response = await fetch(`/api/video/`);
        const json = await response.json();
        if (!response.ok) {
            console.log('fetch error');
            return;
        } else {
            setVideos(json);
            console.log('fetch successfully');
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            {videos &&
                videos.map((video, index) => {
                    return (
                        <Link key={index} to='/video/test' style={{ textDecoration: 'none' }}>
                            <Container>
                                <Image src={`https://img.youtube.com/vi/${video.thumbnail}/maxresdefault.jpg`} />
                                <Details>
                                    <ChannelImage src='https://img.youtube.com/vi/QPxwXAWLji4/maxresdefault.jpg' />
                                    <Texts>
                                        <Title>{video.title}</Title>
                                        <ChannelName>Test channel</ChannelName>
                                        <Info>
                                            {video.view} views • {video.createdAt}
                                        </Info>
                                    </Texts>
                                </Details>
                            </Container>
                        </Link>
                    );
                })}
        </>
    );
};
export default Card;
