import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import axiosWithAuth from '../utils/axiosWithAuth';

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


const UpdateFriend = () => {
    const [updateFriend, setUpdateFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    //handleInputChanges
    const handleInputChanges = (event) => {
        setUpdateFriend({
            ...updateFriend,
            [event.target.name]: event.target.value
        })
    }

    //handleEditSubmit



    return(
        <div>
            <h3>Update friend component</h3>
            <form>
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
                {/* {isAdding && 
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    />
                } */}
                <ButtonStyle type='submit'>Update friend</ButtonStyle>
            </form>
        </div>
    )
}

export default UpdateFriend;
