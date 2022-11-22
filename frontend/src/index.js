import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { theme } from './utils/Theme';

import { ColorModeScript } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </React.StrictMode>,
);
