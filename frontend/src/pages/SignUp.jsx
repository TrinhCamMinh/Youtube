import { Flex, Box, HStack, Stack, Heading, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';

export default function SignUp() {
    const { signUp, error } = useSignUp();
    const handleSubmit = async (e) => {
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
                                <form
                                    id='form'
                                    encType='multipart/form-data'
                                    onSubmit={handleSubmit}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                                >
                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='userName'>Username</label>
                                        <input type='text' name='userName' id='userName' />
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='channelName'>channelName</label>
                                        <input type='text' name='channelName' id='channelName' />
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='password'>password</label>
                                        <input type='password' name='password' id='password' />
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' name='email' id='email' />
                                    </section>

                                    <section style={{ display: 'flex', gap: '2rem' }}>
                                        <article>
                                            <input type='radio' id='Male' name='gender' value='true' />
                                            <label htmlFor='Male'>Male</label>
                                        </article>
                                        <article>
                                            <input type='radio' id='Female' name='gender' value='false' />
                                            <label htmlFor='Female'>Female</label>
                                        </article>
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='avatar'>Avatar</label>
                                        <input type='file' name='avatar' id='avatar' />
                                    </section>
                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='birthDate'>birthDate</label>
                                        <input type='date' name='birthDate' id='birthDate' />
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='phoneNumber'>phoneNumber</label>
                                        <input type='text' name='phoneNumber' id='phoneNumber' />
                                    </section>

                                    <section
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label htmlFor='location'>Location</label>
                                        <input type='text' name='location' id='location' />
                                    </section>

                                    <input
                                        type='submit'
                                        value='Submit'
                                        style={{
                                            width: '30%',
                                            borderRadius: '6px',
                                            padding: '10px',
                                            backgroundColor: '#4f86f7',
                                        }}
                                    />
                                </form>
                            </Box>
                        </HStack>
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
