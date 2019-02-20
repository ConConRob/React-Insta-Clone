import React from 'react';
import './Login.css'

export default class Login extends React.Component {
    state={
        usernameInput: '',
        passwordInput: '',
    }

    setUser = (event) => {
        event.preventDefault();
        this.props.logIn(this.state.usernameInput);
    }
    onChange = (event, whatToUpdate) => {
        this.setState({[whatToUpdate]: event.target.value})
    }

    render(){
        return (
            <div className="login-container">
                <form onSubmit={this.setUser} className="login-form">
                    <input
                        onChange={(event)=>this.onChange(event, 'usernameInput')} 
                        value={this.state.usernameInput} 
                        type="text" 
                        placeholder="Username"/>
                    <input
                        onChange={(event)=>this.onChange(event, 'passwordInput')}
                        value={this.state.passwordInput} 
                        type="password" 
                        placeholder="Password"/>
                    <button>LOGIN</button>
                </form>
            </div>
        )
    }
    
}