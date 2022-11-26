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
import { useForm } from 'react-hook-form';
// import { CountryDropdown } from 'react-country-region-selector';

export default function SignUp() {
    const { signUp, error } = useSignUp();
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(50);
    const [avatarFile, setAvatarFile] = useState();
    const [gender, setGender] = useState(null);
    const [imageToPreview, setImageToPreview] = useState();

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        setImageToPreview(file);
        file.preview = URL.createObjectURL(file);
    };

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        toast({
            title: 'Submitted',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        console.log(data);

        console.log('submitting...');
        const form = document.querySelector('#form');
        const formData = new FormData(form);
        for (let key in data) {
            formData.set(key, data[key]);
        }
        formData.set('gender', gender);
        formData.set('avatar', avatarFile);
        for (var value of formData.values()) {
            console.log(value);
        }
        await signUp(formData);
    };

    const FormStep1 = () => {
        const [showPassword, setShowPassword] = useState(false);
        return (
            <>
                <FormControl id='userName' isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' {...register('userName', {})} />
                </FormControl>
                <FormControl id='channelName' isRequired>
                    <FormLabel>Channel's name</FormLabel>
                    <Input type='text' {...register('channelName', {})} />
                </FormControl>
                <FormControl id='email' isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' {...register('email', {})} />
                </FormControl>
                <FormControl id='password' isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} {...register('password', {})} />
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
        return (
            <>
                <FormLabel>Gender</FormLabel>
                <RadioGroup id='gender' onChange={setGender} value={gender}>
                    <Stack direction='row'>
                        <Radio value='true'>Male</Radio>
                        <Radio value='false'>Female</Radio>
                    </Stack>
                </RadioGroup>
                <FormControl id='avatar' isRequired onChange={handlePreviewImage}>
                    <FormLabel>Avatar</FormLabel>
                    <input
                        type='file'
                        onChange={(e) => {
                            setAvatarFile(e.target.files[0]);
                            setImageToPreview(e.target.files[0]);
                        }}
                    />
                    {avatarFile && <img src={imageToPreview.preview} alt='preview for upload' className='' />}
                </FormControl>
                <FormControl id='birthDate'>
                    <FormLabel>Date of birth</FormLabel>
                    <Input type='date' {...register('birthDate', {})} />
                </FormControl>
                <FormControl id='phoneNumber'>
                    <FormLabel>Phone number</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children='+84' />
                        <Input type='tel' {...register('phoneNumber', {})} />
                    </InputGroup>
                </FormControl>
                <FormControl id='location'>
                    <FormLabel>Location</FormLabel>
                    <Input type='text' {...register('location', {})} />
                    {/* <CountryDropdown
                        value={''}
                        onChange={(val) => {
                            setCountry(val);
                        }}
                    /> */}
                </FormControl>
            </>
        );
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
                    onSubmit={handleSubmit(onSubmit)}
                    id='form'
                >
                    <Stack p={4}>
                        <Progress hasStripe value={progress} mb='5%' isAnimated></Progress>
                        {step === 1 ? <FormStep1 /> : <FormStep2 />}
                        <Text color={'red.500'}>{error ? console.log(error) : 'Error will display here'}</Text>
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
                                        isLoading={isSubmitting}
                                        type='submit'
                                    >
                                        Sign in
                                    </Button>
                                ) : null}
                            </Flex>
                        </ButtonGroup>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user?{' '}
                                <Link as={LinkRouter} to='/signin' color={'red.400'}>
                                    Sign up
                                </Link>
                            </Text>
                        </Stack>
                        {error && <h1>{error}</h1>}
                        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
