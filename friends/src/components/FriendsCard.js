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
    &:hover {
        background: salmon;
    }
`

const FriendsCard = (props) => {
    const { id, name, age, email } = props.friend;
    return (
        <CardWrapper>
            <CardContainer>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
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