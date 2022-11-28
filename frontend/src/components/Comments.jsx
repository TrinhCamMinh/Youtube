import { useParams } from 'react-router-dom';
import { useComment } from '../hooks/useComment';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCommentContext } from '../hooks/useCommentContext';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { Button } from '@chakra-ui/react';

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
    const { user } = useAuthContext();
    const { comment } = useCommentContext();
    const { getComment, postComment } = useComment();
    const inputRef = useRef();

    const fetchComment = async () => {
        await getComment(id);
    };

    const handleSubmitComment = async (value) => {
        await postComment(id, user._id, user.avatar, value);
        inputRef.current.value = '';
    };

    useEffect(() => {
        fetchComment();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {user && (
                <>
                    <NewComment>
                        <Avatar src={`http://localhost:5000${user.avatar}`} />
                        <Input placeholder='Add a comment...' ref={inputRef} />
                        <Button
                            rounded={'full'}
                            onClick={() =>
                                inputRef.current.value.length > 0 && handleSubmitComment(inputRef.current.value)
                            }
                        >
                            Comment
                        </Button>
                    </NewComment>
                    {comment &&
                        comment.map((item, index) => {
                            return <Comment key={index} item={item} />;
                        })}
                </>
            )}
        </Container>
    );
};

export default Comments;
