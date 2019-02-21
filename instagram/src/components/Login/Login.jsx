import React from 'react';
import styled from 'styled-components';


const StyledLogin = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
`
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
            <StyledLogin>
                <form onSubmit={this.setUser}>
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
            </StyledLogin>
        )
    }
    
}