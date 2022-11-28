import React, { useState, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`
    font-size: 14px;
`;

const Comment = ({ item }) => {
    const { getUser } = useUser();
    const [name, setName] = useState(null);

    const fetchUserName = async () => {
        const data = await getUser(item.userID);
        setName(data);
    };

    useEffect(() => {
        fetchUserName();
    }, []);

    return (
        <Container>
            <Avatar src={`http://localhost:5000${item.comment.commentAvatar}`} />
            <Details>
                <Name>
                    {name && name.userName}
                    <Date>{format(item.createdAt)}</Date>
                </Name>
                <Text>{item.comment.commentContent}</Text>
            </Details>
        </Container>
    );
};

export default Comment;
