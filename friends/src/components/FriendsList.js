import React from 'react';
import FriendsCard from './FriendsCard';

const FriendsList = () => {
    //setup useState for store friends state/data


    //setup useEffect --> get request to get friends from api to map over and send to 'FriendsCard'

    return(
        <div>
            <h3>FriendsList component --> display all friends</h3>  
                     
            <FriendsCard />
        </div>
    )
}

export default FriendsList;