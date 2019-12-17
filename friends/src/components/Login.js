import React, {Component} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';


class Login extends Component  {
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
        this.setState({
            isFetching: true
        })
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })

        //setup 'axiosWithAuth' for login
        // '/login' --> baseURL
        axiosWithAuth().post('/login', this.state.credentials)
            .then(response => {
                console.log(response)
                // localStorage.setItem('token', response.data.payload)
            })
            .catch(error => {
                console.log('No data returned', error)
            })
    }

        
    render(){
        return(
            <div>
                <h1>Login component</h1>
                <form>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Name'
                        value={this.state.credentials.username}
                        onChange={this.handleInputChanges}
                    />
                    <input 
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleInputChanges}
                    />
                    <button>Login to friends app</button>{this.state.isFetching && 'logging in'}
                </form>
            </div>
        )
    }
}

export default Login;