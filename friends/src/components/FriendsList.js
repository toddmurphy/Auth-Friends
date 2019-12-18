import React, {useState, useEffect} from 'react';
import FriendsCard from './FriendsCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import CreateFriend from './CreateFriend';

const FriendsList = () => {
    //setup useState for store friends state/data
    const [friendsData, setFriendsData] = useState([])

    //setup useEffect --> get request to get friends from api to map over and send to 'FriendsCard'
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                console.log(response.data)
                setFriendsData(response.data)
            })
            .catch(error => {
                console.log('No friends data returned', error)
            })
    }, [])

    return(
        <div>
            <CreateFriend />
            {friendsData.map(friend => {
                return <FriendsCard key={friend.id} friend={friend}  />
            })}
        </div>
    )
}

export default FriendsList;

/* Data structure
id: 1
name: "Rachel Green"
age: 30
email: "rachel@friends.com" */