import React, {Component} from 'react';

class Login extends Component  {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
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
                        // value={}
                        // onChange={}
                    />
                    <input 
                        type='text'
                        name='password'
                        placeholder='Password'
                        // value={}
                        // onChange={}
                    />
                    <button>Login to friends app</button>
                </form>
            </div>
        )
    }
}

export default Login;