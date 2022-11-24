import {
    FormErrorMessage,
    Progress,
    ButtonGroup,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    RadioGroup,
    Radio,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    InputLeftAddon,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FilePicker from 'chakra-ui-file-picker';

const FormStep1 = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <FormControl id='userName' isRequired>
                <FormLabel>Username</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl id='channelName' isRequired>
                <FormLabel>Channel's name</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                        <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='retypePassword' isRequired>
                <FormLabel>Retype Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                        <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    );
};

const FormStep2 = () => {
    const [gender, setGender] = useState(null);
    const [avatarFile, setAvatarFile] = useState();
    return (
        <>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
                <Stack direction='row'>
                    <Radio value='true'>Male</Radio>
                    <Radio value='false'>Female</Radio>
                </Stack>
            </RadioGroup>
            <FormControl id='avatar' isRequired>
                <FormLabel>Avatar</FormLabel>
                <FilePicker
                    onFileChange={() => {setAvatarFile()}}
                    placeholder='Choose your avatar'
                    clearButtonLabel='remove'
                    multipleFiles={false}
                    accept='application/img'
                    hideClearButton={false}
                />
            </FormControl>
            <FormControl id='birthDate' isRequired>
                <FormLabel>Date of birth</FormLabel>
                <Input type='date' />
            </FormControl>
            <FormControl id='phoneNumber' isRequired>
                <FormLabel>Phone number</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+84' />
                    <Input type='tel' />
                </InputGroup>
            </FormControl>
            <FormControl id='location' isRequired>
                <FormLabel>Location</FormLabel>
                <Input type='text' />
            </FormControl>
        </>
    );
};

export default function SignUp() {
    const { signUp, error } = useSignUp();
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(50);

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
                <Box
                    bg={useColorModeValue('white', 'gray.700')}
                    minW={'500px'}
                    boxShadow={'lg'}
                    p={8}
                    rounded='lg'
                    as='form'
                >
                    <Stack p={4}>
                        <Progress hasStripe value={progress} mb='5%' isAnimated></Progress>
                        {step === 1 ? <FormStep1 /> : <FormStep2 />}
                        <ButtonGroup mt='5%' w='100%'>
                            <Flex mt={'20px'} w='100%' justifyContent='space-between'>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 50);
                                    }}
                                    isDisabled={step === 1}
                                    variant='solid'
                                    w='7rem'
                                    mr='5%'
                                >
                                    Back
                                </Button>
                                {step === 1 ? (
                                    <Button
                                        w='7rem'
                                        isDisabled={step === 2}
                                        onClick={() => {
                                            setStep(step + 1);
                                            if (step === 2) {
                                                setProgress(100);
                                            } else {
                                                setProgress(progress + 50);
                                            }
                                        }}
                                        variant='outline'
                                    >
                                        Next
                                    </Button>
                                ) : null}
                                {step === 2 ? (
                                    <Button
                                        w='7rem'
                                        variant='solid'
                                        bg={'red.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}
                                        onClick={() => {
                                            handleSubmit();
                                            toast({
                                                title: 'Account created.',
                                                description: "We've created your account for you.",
                                                status: 'success',
                                                duration: 3000,
                                                isClosable: true,
                                            });
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                ) : null}
                            </Flex>
                        </ButtonGroup>
                        <Stack pt={6}>
                            <LinkRouter to='/signin'>
                                <Text align={'center'}>
                                    Already a user? <Link color={'red.400'}>Sign in</Link>
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
