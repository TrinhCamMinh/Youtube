import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';
import {format} from 'timeago.js';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button as ButtonCU,
    useDisclosure,
} from '@chakra-ui/react';


const Container = styled.div`
    display: flex;
    gap: 24px;
`;

const Content = styled.div`
    flex: 5;
`;
const VideoWrapper = styled.div`
    width: 50vw;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
    flex: 2;
`;
const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const Image = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

const Video = () => {
    const { id } = useParams();
    const { getSpecificVideo } = useVideo();
    const [video, setVideo] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();


                


    const fetchVideo = async () => {
        const data = await getSpecificVideo(id);
        setVideo(data);
    };

    useEffect(() => {
        fetchVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Content>
                {video && (
                    <>
                        {/* This is modal not display in normal view */}
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Login required</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>You need to sign in to do this function</ModalBody>

                                <ModalFooter>
                                    <ButtonCU colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </ButtonCU>
                                    <ButtonCU variant='ghost'>Login</ButtonCU>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        {/* end modal */}
                        <VideoWrapper>
                            <iframe
                                width='900'
                                height='506'
                                src={`https://www.youtube.com/embed/${video.video}`}
                                title={video.title}
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowfullscreen
                            ></iframe>
                        </VideoWrapper>
                        <Title>{video.title}</Title>
                        <Details>
                            <Info>
                                {video.view} views • {format(video.createdAt)}
                            </Info>
                            <Buttons>
                                <Button onClick={onOpen}>
                                    <ThumbUpOutlinedIcon /> {video.like}
                                </Button>
                                <Button>
                                    <ThumbDownOffAltOutlinedIcon /> Dislike
                                </Button>
                                <Button>
                                    <ReplyOutlinedIcon /> Share
                                </Button>
                                <Button>
                                    <AddTaskOutlinedIcon /> Save
                                </Button>
                            </Buttons>
                        </Details>
                        <Hr />
                        <Channel>
                            <ChannelInfo>
                                <Image src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
                                <ChannelDetail>
                                    <ChannelName>DMT Channel</ChannelName>
                                    <ChannelCounter>200K subscribers</ChannelCounter>
                                    <Description>{video.description}</Description>
                                </ChannelDetail>
                            </ChannelInfo>
                            <Subscribe onClick={onOpen}>SUBSCRIBE</Subscribe>
                        </Channel>
                        <Hr />
                        <Comments onClick={onOpen} />
                    </>
                )}
            </Content>
            <Recommendation>
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
            </Recommendation>
        </Container>
    );
};

export default Video;
