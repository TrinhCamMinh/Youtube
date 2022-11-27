import { useAuthContext } from '../hooks/useAuthContext';
import { useVideo } from '../hooks/useVideo';
import { Button, Box, Image, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import Carousel from '../components/Carousel';
export default function CreateShort() {
    const { user } = useAuthContext();
    const { postShortVideo } = useVideo();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('#form');
        const formData = new FormData(form);
        formData.append('userID', user._id);
        await postShortVideo(formData);
    };

    const [imageToPreview, setImageToPreview] = useState();

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        setImageToPreview(file);
        file.preview = URL.createObjectURL(file);
    };

    return (
        <>
            <Heading colorScheme='red'>Shorts</Heading>
            <Box my={'15px'}>
                <Carousel />
            </Box>
            <Heading mb={'15px'} mt={'55px'} colorScheme='red'>
                Create Short
            </Heading>
            {user && (
                <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
                    <input
                        type='file'
                        name='image'
                        required
                        onChange={(e) => {
                            handlePreviewImage(e);
                        }}
                    />
                    <br />
                    <Box my={'15px'} rounded={'lg'}>
                        {imageToPreview && (
                            <Image
                                borderRadius='lg'
                                src={imageToPreview.preview}
                                alt='preview for upload'
                                className=''
                            />
                        )}
                    </Box>
                    <Button type='submit'>Create</Button>
                </form>
            )}
        </>
    );
}
