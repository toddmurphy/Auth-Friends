import React, { useState } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';


const CardWrapper = styled.div`
    margin: 3% 0;
    display: flex;
    justify-content: center;
`
const CardContainer = styled.div`
    border-radius: 5px;
    background: dodgerblue;
    color: #FFF;
    width: 80%;
`
const ButtonStyle = styled.button`
    width: 30%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border-color: #FFF;
    background: none;
    font-size: 1rem;
    font-weight: bold;
    color: #FFF;
    margin: 3% 2%;
    padding: 2%;

    &:hover {
        background: salmon;
        border: none;
    }
`


const FriendsCard = (props) => {
    const { id, name, age, email, isFetching, setIsFetching } = props.friend;
    
    const [isDeleting, setIsDeleting] = useState(false)

    //handleEditClick
    const handleEditClick = (event) => {
        event.preventDefault();

        props.history.push(`/UpdateFriend/${id}`)
    }

    //handleDeleteFriend
    //axiosWithAuth delete api --> /friends/:id
    const handleDeleteFriend = (event) => {
        event.preventDefault();
        setIsDeleting(true)

        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(response => {
                console.log(response.data)
                
                setIsDeleting(false)
                props.history.push(`/FriendsList`)
                //exported from FriendsList --> triggers re-render or useEffect in FriendsList to reload data each delete
                setIsFetching(!isFetching)
                
            })
            .catch(error => {
                console.log('Friend Deleted', error)
            })
    }


    return (
        <CardWrapper>
            <CardContainer>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                {isDeleting && 
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    />
                }
                <ButtonStyle onClick={handleEditClick} >Edit</ButtonStyle>
                <ButtonStyle onClick={handleDeleteFriend} >Delete</ButtonStyle>
            </CardContainer>
        </CardWrapper>
    )
}

export default FriendsCard;

/* Data structure
id: 1
name: "Rachel Green"
age: 30
email: "rachel@friends.com" */