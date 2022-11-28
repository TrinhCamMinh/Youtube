import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { theme } from './utils/Theme';
import { ColorModeScript } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { CommentContextProvider } from './contexts/CommentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <CommentContextProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </CommentContextProvider>
    </AuthProvider>,
);
