import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: true,
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
