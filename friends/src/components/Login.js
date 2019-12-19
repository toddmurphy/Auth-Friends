import React, { Component } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils/axiosWithAuth';


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

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    }


    //handleInputChanges
    handleInputChanges = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    //handleSubmit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('button fired')
        this.setState({
            isFetching: true
        })

        //setup 'axiosWithAuth' for login
        // '/login' --> baseURL
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.payload)

                //sets values to empty
                this.setState({
                    credentials: {
                        username: '',
                        password: ''
                    }
                })
                this.props.history.push('/FriendsList')
            })
            .catch(error => {
                console.log('No data returned', error)
            })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Please login!</h1>
                <form onSubmit={this.handleSubmit} >
                    <TextInput
                        type='text'
                        name='username'
                        placeholder='Name'
                        value={this.state.credentials.username}
                        onChange={this.handleInputChanges}
                    />
                    <TextInput
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleInputChanges}
                    />
                    <div>
                        <ButtonStyle type='submit'>Login to friends app</ButtonStyle>{this.state.isFetching && 'logging in'}
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;