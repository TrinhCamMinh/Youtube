import { useAuthContext } from '../hooks/useAuthContext';
import { useVideo } from '../hooks/useVideo';
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

    return (
        <>
            {user && (
                <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
                    <input type='file' name='image' required />
                    <br />
                    <input type='submit' />
                </form>
            )}
        </>
    );
}
