import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const CreateFriend = () => {
    //setup useState to store date and setup initial state
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: Number,
        email: '',
        id: Date.now()
    })

    //handleInputChanges
    const handleInputChanges = (event) => {
       setNewFriend({
           ...newFriend,
           [event.target.name]: event.target.value
       })
    }

    //handleSubmit --> use 'axiosWithAuth()' to post new friend inside handleSubmit


    return(
        <div>
            <h3>Create Friend Component</h3>
            <form>
                <input 
                    type='name'
                    name='name'
                    placeholder='Name'
                    value={newFriend.name}
                    onChange={handleInputChanges}
                />
                <input 
                    type="age"
                    name='age'
                    placeholder='Age'
                    value={newFriend.age}
                    onChange={han}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={newFriend.email}
                    onChange={handleInputChanges}
                />
                <button type='submit'>Add new friend</button>
            </form>
        </div>
    )
}

export default CreateFriend;

/* Data structure
id: 1
name: "Rachel Green"
age: 30
email: "rachel@friends.com" */