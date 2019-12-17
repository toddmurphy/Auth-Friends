import React from 'react';
import {Link} from 'react-router-dom';



const Navigation = () => {
    return(
        <div>
            <Link to={'/'} >Home</Link>
            <Link to={'/Login'}>Login</Link>
            <Link to={'/FriendsList'}>Friends</Link>
        </div>
    )
}

export default Navigation;