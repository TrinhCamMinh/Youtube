import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';
import { format } from 'timeago.js';
import LoginRequiredModal from '../components/Modal';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    useColorModeValue,
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
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    ${'' /* color: ${({ theme }) => theme.textSoft}; */}
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

// const Button = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     cursor: pointer;
// `;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
    flex: 2;
`;

const Channel = styled.div`
    display: flex;
    ${'' /* justify-content: space-between; */}
    gap: 40px;
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
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    ${'' /* color: ${({ theme }) => theme.textSoft}; */}
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
    const { user } = useAuthContext();
    const { getVideo, getSpecificVideo, getSubscribeVideo, likeVideo, viewVideo, subscribeVideo } = useVideo();
    const [subscribeChannel, setSubscribeChannel] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [ownerID, setOwnerID] = useState(null);
    const [allVideo, setAllVideo] = useState(null);
    const [video, setVideo] = useState(null);
    const [content, setContent] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    let isSubscribe = '';

    if (user) {
        isSubscribe = true;
    } else isSubscribe = false;

    const fetchAllVideo = async () => {
        const data = await getVideo();
        setAllVideo(data);
    };

    const fetchSpecificVideo = async () => {
        const data = await getSpecificVideo(id);
        setVideo(data);
        setOwnerID(data.ownerID);
    };

    const fetchSubscribeChannel = async () => {
        if (user) {
            const data = await getSubscribeVideo(user._id, ownerID);
            setSubscribeChannel(data);
        }
    };

    const handleSubscribeChannel = async (channelID) => {
        await subscribeVideo(user._id, channelID);
    };

    const updateView = async () => {
        await viewVideo(id);
    };

    const handleLike = async (id) => {
        if (user) {
            await likeVideo(id);
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    const handleSave = () => {
        if (user) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    useEffect(() => {
        fetchSpecificVideo();
        fetchAllVideo();
        updateView();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchSubscribeChannel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ownerID]);

    return (
        <Box bg={useColorModeValue('gray.50', 'black.200')}>
            <Container>
                <Content>
                    {video && (
                        <>
                            {/* This is modal not display in normal view */}
                            <Modal size={'md'} isCentered isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader color={'red.500'}>LOGIN REQUIRED!!!</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>You need to sign in to {content}</ModalBody>
                                    <ModalFooter>
                                        <Button variant='ghost'>Close</Button>
                                        <Link to='/signin'>
                                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                                Sign in
                                            </Button>
                                        </Link>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            {/* end modal */}
                            <VideoWrapper>
                                <iframe
                                    width='965'
                                    height='540'
                                    src={`https://www.youtube.com/embed/${video.video}`}
                                    title={video.title}
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            </VideoWrapper>
                            <Title>{video.title}</Title>
                            <Details>
                                <Info>
                                    {video.view} views • {format(video.createdAt)}
                                </Info>
                                <Buttons>
                                    <Button
                                        rounded={'full'}
                                        onClick={() => {
                                            setContent('like this video');
                                            user ? handleLike(video._id) : onOpen();
                                        }}
                                    >
                                        <ThumbUpOutlinedIcon /> {video.like}
                                        {showModal && <LoginRequiredModal />}
                                    </Button>
                                    <Button rounded={'full'}>
                                        <ThumbDownOffAltOutlinedIcon /> Dislike
                                    </Button>
                                    <Button rounded={'full'}>
                                        <ReplyOutlinedIcon /> Share
                                    </Button>
                                    <Button
                                        rounded={'full'}
                                        onClick={() => {
                                            setContent('save this video');
                                            user ? handleSave() : onOpen();
                                        }}
                                    >
                                        <AddTaskOutlinedIcon /> Save
                                    </Button>
                                </Buttons>
                            </Details>
                            <Hr />
                            <Channel>
                                <ChannelInfo>
                                    <Image src='https://picsum.photos/200/200' />
                                    <ChannelDetail>
                                        <ChannelName>DMT Channel</ChannelName>
                                        <ChannelCounter>200K subscribers</ChannelCounter>
                                        <Description>{video.description}</Description>
                                    </ChannelDetail>
                                </ChannelInfo>

                                <Button
                                    px={'60px'}
                                    rounded={'full'}
                                    colorScheme={subscribeChannel && subscribeChannel.length > 0 ? 'gray' : 'red'}
                                    onClick={() => {
                                        subscribeChannel && subscribeChannel.length > 0
                                            ? console.log('ready to unsubscribe')
                                            : handleSubscribeChannel(video.ownerID);
                                    }}
                                >
                                    {subscribeChannel && subscribeChannel.length > 0 ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                                </Button>
                            </Channel>
                            <Hr />
                            <Comments />
                        </>
                    )}
                </Content>
                <Recommendation>
                    {allVideo &&
                        allVideo.map((item, index) => {
                            return <Card key={index} type='sm' item={item} />;
                        })}
                </Recommendation>
            </Container>
        </Box>
    );
};

export default Video;
