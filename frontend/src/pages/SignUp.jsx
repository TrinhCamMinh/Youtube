import { Flex, Box, HStack, Stack, Button, Heading, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';

export default function SignUp() {
    const { signUp, error } = useSignUp();
    const handleSubmit = async (e) => {
        console.log('submitting...');
        e.preventDefault();
        const form = document.querySelector('#form');
        const formData = new FormData(form);
        await signUp(formData);
    };
    return (
        <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'black.200')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
                                    <label htmlFor='userName'>Username</label>
                                    <input type='text' name='userName' id='userName' />
                                    <br />
                                    <label htmlFor='channelName'>channelName</label>
                                    <input type='text' name='channelName' id='channelName' />
                                    <br />
                                    <label htmlFor='password'>password</label>
                                    <input type='password' name='password' id='password' />
                                    <br />
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email' />
                                    <br />
                                    <input type='radio' id='Male' name='gender' value='true' />
                                    <label htmlFor='Male'>Male</label>
                                    <input type='radio' id='Female' name='gender' value='false' />
                                    <label htmlFor='Female'>Female</label>
                                    <br />
                                    <label htmlFor='avatar'>Avatar</label>
                                    <input type='file' name='avatar' id='avatar' />
                                    <label htmlFor='birthDate'>birthDate</label>
                                    <input type='date' name='birthDate' id='birthDate' />
                                    <br />
                                    <label htmlFor='phoneNumber'>phoneNumber</label>
                                    <input type='text' name='phoneNumber' id='phoneNumber' />
                                    <br />
                                    <label htmlFor='location'>Location</label>
                                    <input type='text' name='location' id='location' />
                                    <br />
                                    <input type='submit' value='Submit' />
                                </form>
                            </Box>
                        </HStack>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText='Submitting'
                                size='lg'
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <LinkRouter to='/signin'>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'}>Login</Link>
                                </Text>
                            </LinkRouter>
                        </Stack>
                        {error && <h1>{error}</h1>}
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
