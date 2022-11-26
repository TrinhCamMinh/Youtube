import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useAuthContext } from '../hooks/useAuthContext';
import {
    Box,
    Button,
    UnorderedList,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
    useToast,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    Input,
    Stack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Text,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserAvatar = styled.img`
    height: 88px;
    width: 88px;
    border-radius: 50px;
    background-image: cover;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 20px;
`;

const ChannelName = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 24px;
`;

const Username = styled.p`
    font-weight: 300;
    font-size: 12px;
    margin: 10px 0px;
`;

const SubcriberCount = styled.p`
    font-weight: 300;
    font-size: 12px;
    margin: 0;
`;

const Home = () => {
    const { user } = useAuthContext();
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { gender, setGender } = useState();

    return (
        <Container>
            {/* Modal */}
            <Modal size={'md'} isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={'red.500'}>User profile edit</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl my={'2'} id='avatar'>
                            <FormLabel>User Avatar</FormLabel>
                            <Stack direction={['column', 'row']} spacing={6}>
                                <Center>
                                    <Avatar size='xl' src={`http://localhost:5000/${user.avatar}`}>
                                        <AvatarBadge
                                            as={IconButton}
                                            size='sm'
                                            rounded='full'
                                            top='-10px'
                                            colorScheme='red'
                                            aria-label='remove Image'
                                            icon={<SmallCloseIcon />}
                                        />
                                    </Avatar>
                                </Center>
                                <Center w='full'>
                                    <input w='full' type='file' />
                                    Change avatar
                                </Center>
                            </Stack>
                        </FormControl>
                        <FormControl id='userName' isRequired>
                            <FormLabel>User name</FormLabel>
                            <Input placeholder='user name' _placeholder={{ color: 'gray.500' }} type='text' />
                        </FormControl>
                        <FormControl id='email' isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                placeholder='your-email@example.com'
                                _placeholder={{ color: 'gray.500' }}
                                type='email'
                            />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='password' _placeholder={{ color: 'gray.500' }} type='password' />
                        </FormControl>
                        <FormControl id='birthDate' isRequired>
                            <FormLabel>Date of birth</FormLabel>
                            <Input placeholder='birthday' _placeholder={{ color: 'gray.500' }} type='text' />
                        </FormControl>
                        <FormControl id='gender' isRequired>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup id='gender' onChange={setGender} value={gender}>
                                <Stack direction='row'>
                                    <Radio value='true'>Male</Radio>
                                    <Radio value='false'>Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='password' _placeholder={{ color: 'gray.500' }} type='text' />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bg={'red.400'}
                            color={'white'}
                            w='50%'
                            _hover={{
                                bg: 'red.500',
                            }}
                            mr={'1'}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w='50%'
                            _hover={{
                                bg: 'blue.500',
                            }}
                            ml={'1'}
                            onClick={() => {
                                toast({
                                    title: 'Submitted',
                                    status: 'success',
                                    duration: 3000,
                                    isClosable: true,
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Profile>
                <Profile>
                    <UserAvatar src={`http://localhost:5000/${user.avatar}`} />
                    <UserInfo>
                        <ChannelName>{user.channelName}</ChannelName>
                        <Username>@{user.userName}</Username>
                        <SubcriberCount>1000 subcribers</SubcriberCount>
                    </UserInfo>
                </Profile>
                <Button rounded={'full'} onClick={onOpen}>
                    Edit Profile
                </Button>
            </Profile>
            <Box
                w={'25vw'}
                my={'5'}
                borderWidth={'2px'}
                bg={useColorModeValue('gray.50', 'gray.700')}
                rounded={'lg'}
                p={4}
            >
                <UnorderedList>
                    <ListItem>DoB: 14/03/2002</ListItem>
                    <ListItem>Email: nguyentrieuduong14032002@gmail.com</ListItem>
                    <ListItem>Location: Vietnam</ListItem>
                    <ListItem>Gender: Male</ListItem>
                    <ListItem>Phone number: 0399129859</ListItem>
                </UnorderedList>
            </Box>
            <Text as='b' fontSize={'4xl'} mt={'60px'}>
                Uploaded Video
            </Text>
            <Wrapper>
                <Card />
                <Card />
                <Card />
                <Card />
            </Wrapper>
        </Container>
    );
};

export default Home;
