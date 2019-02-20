import React from 'react';
import './PostButtons.css';
export default class PostButtons extends React.Component{

    state = {
        isLikedByUser: false,
    }

    handleLike = () => {
            this.props.addLike(this.props.id, this.props.user);
            

    }

    
    checkIfUserLiked = (user) => {
        if(this.props.liked.includes(user)){
  
            return true;
        } else {
            
            return false;
        }
    }
    
    componentDidUpdate() {
         const isLiked = this.checkIfUserLiked(this.props.user)
         if(this.state.isLikedByUser !== isLiked){
             this.setState({isLikedByUser: isLiked})
         }
    }
    render() {
        return (
            <div className="post-buttons">
            {
                this.state.isLikedByUser?
                    <i onClick={this.handleLike} className="fas fa-heart"></i>
                :
                    <i onClick={this.handleLike}  className="far fa-heart"></i>
            }
            
            <i className="far fa-comment"></i>
            </div>
        )
    }
}