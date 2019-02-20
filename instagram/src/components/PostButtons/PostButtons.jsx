import React from 'react';
import './PostButtons.css';
export default class PostButtons extends React.Component{
    handleLike = () => {
        if(this.props.liked){
            // already liked
            // remove like
            this.props.addLike(this.props.id, false)
            this.setState({liked:false})
        }else{
            // not already liked 
            // add like
            this.props.addLike(this.props.id, true)
            this.setState({liked:true})
        }
    }
    render() {
        return (
            <div className="post-buttons">
            {
                this.props.liked?
                    <i onClick={this.handleLike} className="fas fa-heart"></i>
                :
                    <i onClick={this.handleLike}  className="far fa-heart"></i>
            }
            
            <i className="far fa-comment"></i>
            </div>
        )
    }
}