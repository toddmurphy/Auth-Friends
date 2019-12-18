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

    //handleChangeInput


    //handleSubmit --> use 'axiosWithAuth()' to post new friend inside handleSubmit


    return(
        <div>
            <h3>Create Friend Component</h3>
            <form>
                <input 
                    type='name'
                    name='name'
                    placeholder='Name'
                    // value={}
                    // onChange={}
                />
                <input 
                    type="age"
                    name='age'
                    placeholder='Age'
                    //value={}
                    //onChange={}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    //value={}
                    //onChange={}
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