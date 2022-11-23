import { extendTheme } from '@chakra-ui/react';

export const darkTheme = {
    bg: '#0f0f0f',
    bgLighter: '#0f0f0f',
    text: 'white',
    textSoft: '#aaaaaa',
    soft: '#373737',
};
export const lightTheme = {
    bg: '#f9f9f9',
    bgLighter: 'white',
    text: 'black',
    textSoft: '#606060',
    soft: '#f5f5f5',
};

export const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
        heading: `'Be Vietnam Pro', sans-serif`,
        body: `'Be Vietnam Pro', sans-serif`,
    },
    styles: {
        global: {
            // styles for the `a`
            h1: {},
        },
    },
});
