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
    useToast,
} from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { useRef } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';

export default function SignIn() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const { login, error } = useLogin();
    const toast = useToast();
    const { user } = useAuthContext();

    const handleLogin = async () => {
        await login(userNameRef.current.value, passwordRef.current.value);
    };

    return (
        <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'black.200')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'}>
                        to enjoy all of our cool <Link color={'red.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id='email'>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' ref={userNameRef} />
                        </FormControl>
                        <FormControl id='password'>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' ref={passwordRef} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'red.400'}>Forgot password?</Link>
                            </Stack>
                            <Text color={'red.500'}>{error && <small>{error}</small>}</Text>
                            <Button
                                mt={1}
                                as={LinkRouter}
                                onClick={() => {
                                    handleLogin();
                                    // eslint-disable-next-line no-lone-blocks
                                    {
                                        user
                                            ? toast({
                                                  title: 'Login successful',
                                                  status: 'success',
                                                  duration: 3000,
                                                  isClosable: true,
                                              })
                                            : toast({
                                                  title: 'Login failed',
                                                  status: 'error',
                                                  duration: 3000,
                                                  isClosable: true,
                                              });
                                    }
                                }}
                                bg={'red.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'red.500',
                                }}
                                to={user ? '/' : '/signin'}
                            >
                                Sign in
                            </Button>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user?{' '}
                                    <Link as={LinkRouter} to='/signup' color={'red.400'}>
                                        Sign up
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
