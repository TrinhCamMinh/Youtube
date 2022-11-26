import React, { useRef } from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Container = styled.div`
    position: sticky;
    top: 0;
    ${'' /* background-color: ${({ theme }) => theme.bgLighter}; */}
    height: 56px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 5px 20px;
    position: relative;
`;

const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border: 1px solid #303030;
    border-radius: 30px;
    font-size: 16px;
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    ${'' /* color: ${({ theme }) => theme.text}; */}
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    border: 1px solid #303030;
    color: #3ea6ff;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logout();
    };

    const handleSearch = async () => {
        console.log('navigate');
        navigate(`/search/${searchRef.current.value}`);
    };

    return (
        <Box bg={useColorModeValue('white', 'black.200')}>
            <Container>
                <Wrapper>
                    <Search>
                        <Input placeholder='Search' ref={searchRef} />
                        <SearchOutlinedIcon style={{ color: 'text' }} onClick={handleSearch} />
                    </Search>
                    {user ? (
                        <Link to='profile' style={{ textDecoration: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img
                                    src={`http://localhost:5000/${user.avatar}`}
                                    alt='user avatar'
                                    style={{ width: '27px', height: '25px', borderRadius: '6px' }}
                                />
                                <small>{user.userName}</small>
                                <i
                                    className='fa-solid fa-right-from-bracket'
                                    style={{ color: '#ef3038' }}
                                    onClick={handleLogOut}
                                ></i>
                            </div>
                        </Link>
                    ) : (
                        <Link to='signin' style={{ textDecoration: 'none' }}>
                            <Button>
                                <AccountCircleOutlinedIcon />
                                Sign in
                            </Button>
                        </Link>
                    )}
                </Wrapper>
            </Container>
        </Box>
    );
};

export default Navbar;
