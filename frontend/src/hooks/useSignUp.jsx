import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
export const useSignUp = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    const signUp = async (form) => {
        const response = await fetch(`http://localhost:5000/api/user/signup`, {
            method: 'POST',
            body: form,
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json);
        } else {
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
        }
        return json;
    };
    return { signUp, error };
};
