import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme, theme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import LikedVideo from './pages/LikedVideo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import WatchLater from './pages/WatchLater';
import Profile from './pages/Profile';
import History from './pages/History';
import UserProfileEdit from './pages/ProfileEdit';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';

const Container = styled.div`
    display: flex;
`;

const Main = styled.div`
    flex: 7;
    ${'' /* background-color: ${({ theme }) => theme.bg}; */}
`;
const Wrapper = styled.div`
    padding: 22px 96px;
`;

function App() {
    const [lightMode, setLightMode] = useState(true);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <ChakraProvider theme={theme}>
            {/* <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}> */}
            <Container>
                <BrowserRouter>
                    <Menu lightMode={lightMode} setLightMode={setLightMode} />
                    <Main>
                        <Navbar />
                        <Wrapper>
                            <Routes>
                                <Route path='/'>
                                    <Route index element={<Home />} />
                                    <Route path='/signin' element={<SignIn />} />
                                    <Route path='/signup' element={<SignUp />} />
                                    <Route path='/liked' element={<LikedVideo />} />
                                    <Route path='/later' element={<WatchLater />} />
                                    <Route path='/history' element={<History />} />
                                    <Route path='/profile' element={<Profile />} />
                                    <Route path='/edit-profile' element={<UserProfileEdit />} />
                                    <Route path='/video'>
                                        <Route path=':id' element={<Video />} />
                                    </Route>
                                </Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
            {/* </ThemeProvider> */}
        </ChakraProvider>
    );
}

export default App;
