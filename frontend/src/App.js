import { useState } from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { theme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import LikedVideo from './pages/LikedVideo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import WatchLater from './pages/WatchLater';
import Profile from './pages/Profile';
import History from './pages/History';
import Search from './pages/Search';
import { ChakraProvider } from '@chakra-ui/react';

const Container = styled.div`
    display: flex;
`;

const Main = styled.div`
    flex: 7;
`;
const Wrapper = styled.div`
    padding: 22px 96px;
`;

function App() {
    const [lightMode, setLightMode] = useState(true);

    return (
        <ChakraProvider theme={theme}>
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
                                    <Route path='/video'>
                                        <Route path=':id' element={<Video />} />
                                    </Route>
                                    <Route path='/search/:query' element={<Search />} />
                                </Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ChakraProvider>
    );
}

export default App;
