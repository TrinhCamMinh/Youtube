import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
export const useLogin = () => {
    const [error, setError] = useState(false);
    const { dispatch } = useAuthContext();
    const login = async (userName, password) => {
        const response = await fetch(`http://localhost:5000/api/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password }),
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json);
        } else {
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
        }
    };
    return { login, error };
};
