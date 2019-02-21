import React from 'react';
import styled from 'styled-components';
import './PostButtons.css';
const StyledPostButtons = styled.div`
    font-size: 24px;
    padding-top: 6px;
    i.fa-comment{
        margin-left: 15px;
        transform: scale(-1, 1);
    }
`
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
            <StyledPostButtons>
            {
                this.state.isLikedByUser?
                    <i onClick={this.handleLike} className="fas fa-heart"></i>
                :
                    <i onClick={this.handleLike}  className="far fa-heart"></i>
            }
            
            <i className="far fa-comment"></i>
            </StyledPostButtons>
        )
    }
}