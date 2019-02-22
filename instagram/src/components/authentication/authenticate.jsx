import React from 'react';

const authenticate =(Component, LoginComponent) =>
    class Authenticate extends React.Component {
        state = {
            loggedIn: false,
            user: '',
        }

        logIn = (username) => {
            localStorage.setItem('username', username);
            this.setState({
                loggedIn: true,
                user: username
            })
        }

        logOut = () => {
            localStorage.set('username', '');
            this.setState({
                loggedIn: false,
                user:'',
            })
        }

        componentDidMount() {
            const loggedIn = !!localStorage.getItem('username');
            this.setState({loggedIn, user:localStorage.getItem('username')})
        }

        componentDidUpdate() {
            const loggedIn = !!localStorage.getItem('username');
            if(this.state.loggedIn !== loggedIn){
                this.setState({loggedIn, user: ''})
            }
        }
        render(){
            if(!localStorage.getItem('username')){
                return <LoginComponent logIn={this.logIn}/>
            }else {
                return(
                    <Component {...this.props} user={this.state.user} />
                )
            }
        }
}
export default authenticate;