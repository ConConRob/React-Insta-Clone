import React from 'react';

const authenticate =(Component) =>
    class Authenticate extends React.Component {
        render(){
            return(
                <Component {...this.props} />
            )
        }
}
export default authenticate;