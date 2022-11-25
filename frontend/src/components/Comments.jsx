import { useParams } from 'react-router-dom';
import { useComment } from '../hooks/useComment';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const Comments = () => {
    const { id } = useParams();
    const { getComment } = useComment();
    const [comment, setComment] = useState(null);

    const fetchComment = async () => {
        const data = await getComment(id);
        setComment(data);
    };

    useEffect(() => {
        fetchComment();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <NewComment>
                <Avatar src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
                <Input placeholder='Add a comment...' />
            </NewComment>
            {comment &&
                comment.map((item, index) => {
                    return <Comment key={index} item={item} />;
                })}
        </Container>
    );
};

export default Comments;
