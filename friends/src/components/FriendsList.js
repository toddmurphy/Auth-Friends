import React, {useState, useEffect} from 'react';
import FriendsCard from './FriendsCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import CreateFriend from './CreateFriend';

import  {Route} from 'react-router-dom';

const FriendsList = (props) => {
    //setup useState for store friends state/data
    const [friendsData, setFriendsData] = useState([])
    //this triggers a change in useEffect to re-fetch the data
    const [isFetching, setIsFetching] = useState(false)

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

            // return () => {
            //     cleanup
            // }
    }, [isFetching])

    return(
        <div>
            <CreateFriend isFetching={isFetching} setIsFetching={setIsFetching} />
            {friendsData.map(friend => {
                return <Route key={friend.id}  
                            render={props => (
                            <FriendsCard
                                {...props} // this is the same as below
                                //               match={props.match}
                                //               history={props.history}
                                //               location={props.location}
                                
                                friend={friend}
                            />
                            )}
                        />
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

/* return <FriendsCard
                         key={friend.id} 
                         friend={friend} 
                         history={props.history} 
                         match={props.match} 
                         isFetching={isFetching} 
                         setIsFetching={setIsFetching} 
                         /> */