import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import {axiosWithAuth} from '../utils/axiosWithAuth';


const TextInput = styled.input`
    margin: 1% 3%;
    height: 40px;
    width: 50%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

const ButtonStyle = styled.button`
    width: 40%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #5ccc6e;
    color: #FFF;
    margin-top: 3%;
`


const UpdateFriend = (props) => {
    const [updateFriend, setUpdateFriend] = useState({
        name: '',
        age: '',
        email: '',
    })
    
    //setup useEffect to get friends data from api using ID -->
    useEffect(() => {
        axiosWithAuth()
            .get(`/friends/${props.match.params.id}`)
            .then(response => {
                console.log(response.data)
                setUpdateFriend(response.data)
            })
            .catch(error => {
                console.log('Sorry, no data by id', error)
            })
    }, [props.match.params.id])


    //handleInputChanges
    const handleInputChanges = (event) => {
        setUpdateFriend({
            ...updateFriend,
            [event.target.name]: event.target.value
        })
    }

    //subit data back to api
    //handleEditSubmit
    const handleEditSubmit = (event) => {
        event.preventDefault();

        axiosWithAuth()
            .put(`/friends/${props.match.params.id}`, updateFriend)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log('Sorry, friend not updated', error)
            })
            props.history.push(`/FriendsList`)

    }



    return(
        <div>
            <h3>Update friend component</h3>
            <form onSubmit={handleEditSubmit}>
                <TextInput 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={updateFriend.name}
                    onChange={handleInputChanges}
                />
                <TextInput 
                    type="number"
                    name='age'
                    placeholder='Age'
                    value={updateFriend.age}
                    onChange={handleInputChanges}
                />
                <TextInput 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={updateFriend.email}
                    onChange={handleInputChanges}
                />
                <ButtonStyle type='submit'>Update friend</ButtonStyle>
            </form>
        </div>
    )
}

export default UpdateFriend;
