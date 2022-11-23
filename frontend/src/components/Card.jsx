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

    useEffect(() => {
        setVideos(VideoDataMock);
    }, []);

    // const DisplayVideos = (videos) => {
    //     if (!videos.length) return null;

    //     console.log(videos.length);

    //     return videos.map((video, index) => (
    //         <CardItem
    //             key={index}
    //             // link={video.link}
    //             creatorAvatar={video.creatorAvatar}
    //             creator={video.creator}
    //             createTime={video.createTime}
    //             viewCount={video.viewCount}
    //             title={video.title}
    //             image={video.imageSrc}
    //         />
    //     ));
    // };

    // const CardItem = (video, { type }) => {
    // <Link to='/video/test' style={{ textDecoration: 'none' }}>
    //     <Container type={type} key={video.id}>
    //         <Image type={type} src={video.image} />
    //         <Details type={type}>
    //             <ChannelImage type={type} src={video.creatorAvatar} />
    //             <Texts>
    //                 <Title>{video.title}</Title>
    //                 <ChannelName>{video.creator}</ChannelName>
    //                 <Info>
    //                     {video.viewCount} views • {video.createTime}
    //                 </Info>
    //             </Texts>
    //         </Details>
    //     </Container>
    // </Link>;
    // };

    return (
        <>
            {videos &&
                videos.map((video) => {
                    return (
                        <Link key={video.id} to='/video/test' style={{ textDecoration: 'none' }}>
                            <Container>
                                <Image src={video.image} />
                                <Details>
                                    <ChannelImage src={video.creatorAvatar} />
                                    <Texts>
                                        <Title>{video.title}</Title>
                                        <ChannelName>{video.creator}</ChannelName>
                                        <Info>
                                            {video.viewCount} views • {video.createTime}
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
