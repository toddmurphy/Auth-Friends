import React from 'react';
import styled from 'styled-components';

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
    const { id, name, age, email } = props.friend;

    //handleEditClick
    const handleEditClick = (event) => {
        event.preventDefault();

        props.history.push('/UpdateFriend')
    }

    return (
        <CardWrapper>
            <CardContainer>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <ButtonStyle onClick={handleEditClick} >Edit</ButtonStyle>
                <ButtonStyle>Delete</ButtonStyle>
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