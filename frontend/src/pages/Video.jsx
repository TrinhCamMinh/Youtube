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
    Button as ButtonCU,
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
    const [showModal, setShowModal] = useState(false);
    const { getVideo, getSpecificVideo } = useVideo();
    const [allVideo, setAllVideo] = useState(null);
    const [video, setVideo] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const fetchAllVideo = async () => {
        const data = await getVideo();
        setAllVideo(data);
    };

    const fetchSpecificVideo = async () => {
        const data = await getSpecificVideo(id);
        setVideo(data);
    };

    const handleLike = () => {
        if (user) {
            console.log(`liked with login`);
            setShowModal(false);
        } else {
            console.log(`liked without login`);
            setShowModal(true);
        }
    };

    const handleSave = () => {
        if (user) {
            console.log(`save with login`);
            setShowModal(false);
        } else {
            console.log(`save without login`);
            setShowModal(true);
        }
    };

    useEffect(() => {
        fetchSpecificVideo();
        fetchAllVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                                    <ModalBody>You need to sign in to do this function</ModalBody>

                                    <ModalFooter>
                                        <ButtonCU variant='ghost'>Close</ButtonCU>
                                        <Link to='/signin'>
                                            <ButtonCU colorScheme='red' mr={3} onClick={onClose}>
                                                Sign in
                                            </ButtonCU>
                                        </Link>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            {/* end modal */}
                            <VideoWrapper>
                                <iframe
                                    width='1032'
                                    height='580'
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
                                    <Button onClick={handleLike}>
                                        <ThumbUpOutlinedIcon /> {video.like}
                                        {showModal && <LoginRequiredModal />}
                                    </Button>
                                    <Button>
                                        <ThumbDownOffAltOutlinedIcon /> Dislike
                                    </Button>
                                    <Button>
                                        <ReplyOutlinedIcon /> Share
                                    </Button>
                                    <Button onClick={handleSave}>
                                        <AddTaskOutlinedIcon /> Save
                                        {showModal && <LoginRequiredModal />}
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
