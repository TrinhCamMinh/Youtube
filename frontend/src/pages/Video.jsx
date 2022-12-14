import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import { useUser } from '../hooks/useUser';
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
    Flex,
    Text,
    Card as CardCU,
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
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const Details = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const Recommendation = styled.div`
    flex: 2;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
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

const Video = () => {
    const { id } = useParams();
    const { user } = useAuthContext();
    const { getUser } = useUser();
    const {
        getVideo,
        getSpecificVideo,
        getSubscribeVideo,
        likeVideo,
        postLikeVideo,
        postSaveVideo,
        postWatchedVideo,
        viewVideo,
        subscribeVideo,
    } = useVideo();
    const [subscribeChannel, setSubscribeChannel] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [ownerID, setOwnerID] = useState(null);
    const [allVideo, setAllVideo] = useState(null);
    const [video, setVideo] = useState(null);
    const [channelName, setChannelName] = useState(null);
    const [content, setContent] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [liked, setLiked] = useState();
    const [numLiked, setNumLiked] = useState();
    const [saved, setSaved] = useState();

    const fetchAllVideo = async () => {
        const data = await getVideo();
        setAllVideo(data);
    };

    const fetchSpecificVideo = async () => {
        const data = await getSpecificVideo(id);
        setVideo(data);
        setOwnerID(data.ownerID);
        setNumLiked(data.like);
    };

    const fetchSubscribeChannel = async () => {
        if (user) {
            const data = await getSubscribeVideo(user._id, ownerID);
            setSubscribeChannel(data);
        }
    };

    const fetchChannelName = async () => {
        if (ownerID) {
            const data = await getUser(ownerID);
            setChannelName(data.channelName);
        }
    };

    const handleSubscribeChannel = async (channelID) => {
        await subscribeVideo(user._id, channelID);
    };

    const updateView = async () => {
        await viewVideo(id);
    };

    const handleLike = async () => {
        if (user) {
            await likeVideo(id);
            await postLikeVideo(user._id, id);
            setLiked(true);
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    const handleSave = async () => {
        if (user) {
            await postSaveVideo(user._id, id);
            setSaved(true);
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    useEffect(() => {
        fetchSpecificVideo();
        fetchAllVideo();
        if (user) {
            updateView();
            postWatchedVideo(user._id, id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchSubscribeChannel();
        fetchChannelName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ownerID]);

    return (
        <Box bg={useColorModeValue('white', 'black.200')}>
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
                            <Channel>
                                <ChannelInfo>
                                    <Image src='https://picsum.photos/200/200' />
                                    <ChannelDetail>
                                        {channelName && <ChannelName>{channelName}</ChannelName>}
                                        <ChannelCounter>200K subscribers</ChannelCounter>
                                    </ChannelDetail>
                                    <Button
                                        px={'30px'}
                                        rounded={'full'}
                                        colorScheme={subscribeChannel && subscribeChannel.length > 0 ? 'gray' : 'red'}
                                        onClick={() => {
                                            // eslint-disable-next-line no-lone-blocks
                                            {
                                                !user
                                                    ? onOpen()
                                                    : subscribeChannel && subscribeChannel.length > 0
                                                    ? console.log('ready to unsubscribe')
                                                    : handleSubscribeChannel(video.ownerID);
                                            }
                                        }}
                                    >
                                        {subscribeChannel && subscribeChannel.length > 0 ? 'Subscribed' : 'Subscribe'}
                                    </Button>
                                </ChannelInfo>
                                <Buttons>
                                    <Box>
                                        <Button
                                            as={Flex}
                                            gap='2'
                                            borderLeftRadius='full'
                                            onClick={() => {
                                                setNumLiked(numLiked + 1);
                                                setContent('like this video');
                                                user ? handleLike() : onOpen();
                                            }}
                                            colorScheme={liked ? 'red' : 'gray'}
                                        >
                                            <ThumbUpOutlinedIcon />
                                            {numLiked}
                                            {showModal && <LoginRequiredModal />}
                                        </Button>

                                        <Button
                                            borderRightRadius={'full'}
                                            as={Flex}
                                            gap='2'
                                            onClick={() => {
                                                setContent("don't like this video");
                                                onOpen();
                                            }}
                                        >
                                            <ThumbDownOffAltOutlinedIcon />
                                        </Button>
                                    </Box>
                                    <Button rounded={'full'} as={Flex} gap='2'>
                                        <ReplyOutlinedIcon /> Share
                                    </Button>
                                    <Button
                                        as={Flex}
                                        gap='2'
                                        rounded={'full'}
                                        onClick={() => {
                                            setContent('save this video');
                                            user ? handleSave() : onOpen();
                                        }}
                                        colorScheme={saved ? 'red' : 'gray'}
                                    >
                                        <AddTaskOutlinedIcon /> Save
                                    </Button>
                                </Buttons>
                            </Channel>
                            <CardCU colorScheme='gray' rounded={'lg'} p={'5'} mb={'5'}>
                                <Details>
                                    <Text as='b' mb={'2'}>
                                        {video.view} views ??? {format(video.createdAt)}
                                    </Text>
                                    <Description>{video.description}</Description>
                                </Details>
                            </CardCU>
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
