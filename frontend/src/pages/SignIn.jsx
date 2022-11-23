import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { useRef } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function SimpleCard() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const { login, error } = useLogin();

    const handleLogin = async () => {
        await login(userNameRef.current.value, passwordRef.current.value);
    };

    return (
        <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'black.200')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id='email'>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' ref={userNameRef} />
                        </FormControl>
                        <FormControl id='password'>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' ref={passwordRef} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                onClick={handleLogin}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                Sign in
                            </Button>
                            <Stack pt={6}>
                                <LinkRouter to='/signup'>
                                    <Text align={'center'}>
                                        Not a user? <Link color={'blue.400'}>Signup</Link>
                                    </Text>
                                </LinkRouter>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            {error && <h1>{error}</h1>}
        </Flex>
    );
}
