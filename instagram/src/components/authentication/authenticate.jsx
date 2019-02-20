import React from 'react';


const authenticate =(Component, LoginComponent) =>
    class Authenticate extends React.Component {
        state = {
            loggedIn: false,
        }

        logIn = (username) => {
            localStorage.setItem('username', username);
            this.setState({loggedIn: true})
        }

        logOut = () => {
            localStorage.set('username', '');
            this.setState({loggedIn: false})
        }

        componentDidMount() {
            const loggedIn = !!localStorage.getItem('username');
            this.setState({loggedIn})
        }

        componentDidUpdate() {
            console.log('here');
            const loggedIn = !!localStorage.getItem('username');
            console.log(localStorage.getItem('username'));
            if(this.state.loggedIn !== loggedIn){
                this.setState({loggedIn})
            }
        }
        render(){
            if(!localStorage.getItem('username')){
                return <LoginComponent logIn={this.logIn}/>
            }else {
                return(
                    <Component {...this.props} />
                )
            }
        }
}
export default authenticate;