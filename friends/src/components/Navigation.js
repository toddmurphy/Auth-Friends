import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2% 0;
    background: #00aced;
`

const LinkStyle = styled(NavLink)`
    text-decoration: none;
    color: #FFF;
    padding:0 3%;
    font-size: 1.4rem;
    font-weight: bold;
`

const Navigation = () => {
    return(
        <div>
            <NavigationWrapper>
                <LinkStyle to={'/'} >Home</LinkStyle>
                <LinkStyle to={'/Login'}>Login</LinkStyle>
                <LinkStyle to={'/FriendsList'}>Friends</LinkStyle>
            </NavigationWrapper>
        </div>
    )
}

export default Navigation;