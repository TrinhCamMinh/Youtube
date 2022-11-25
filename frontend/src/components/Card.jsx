import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAvatar } from '../hooks/useAvatar';
import { format } from 'timeago.js';

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '360px'};
    margin-bottom: ${(props) => (props.type === 'sm' ? '15px' : '25px')};
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
    margin-right: ${(props) => (props.type === 'sm' ? '10px' : 0)};
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
    ${'' /* background-color: #999; */}
    display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;

const Title = styled.p`
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const ChannelName = styled.h2`
    font-size: 14px;
    font-weight: 400;
    ${'' /* color: ${({ theme }) => theme.textSoft}; */}
    margin: 2px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    font-weight: 300;
    ${'' /* color: ${({ theme }) => theme.textSoft}; */}
`;

const Card = ({ type, item }) => {
    const [avatar, setAvatar] = useState(null);
    const { getUserAvatar } = useAvatar();

    const fetchUserAvatar = async (id) => {
        const data = await getUserAvatar(id);
        setAvatar(data);
    };

    useEffect(() => {
        if (item) {
            fetchUserAvatar(item.ownerID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {item && (
                <Link to={`/video/${item._id}`} style={{ textDecoration: 'none' }}>
                    <Container type={type}>
                        <Image type={type} src={`https://img.youtube.com/vi/${item.thumbnail}/maxresdefault.jpg`} />
                        <Details type={type}>
                            {type !== 'sm' && <ChannelImage type={type} src={`http://localhost:5000${avatar}`} />}
                            <Texts>
                                <Title>{item.title}</Title>
                                <ChannelName>Test channel</ChannelName>
                                <Info>
                                    {item.view} views • {format(item.createdAt)}
                                </Info>
                            </Texts>
                        </Details>
                    </Container>
                </Link>
            )}
        </>
    );
};
export default Card;
