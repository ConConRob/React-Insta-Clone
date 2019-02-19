import React from 'react';

class CommentSubmitForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentInputValue:'',
        }
    }

    handleSubmit=(event,user, text ,id) => {
        event.preventDefault();
        this.props.addComment(user,text,id);
        this.setState({currentInputValue:''})
    }
    handleChange=(event)=> {
        this.setState({currentInputValue: event.target.value})
    }
    render(){
        return (
            <form onSubmit={(event) => {
                this.handleSubmit(event,'Connor',this.state.currentInputValue,this.props.id)
            }}
            >
                <input 
                    
                    onChange={(event)=>this.handleChange(event)} 
                    value={this.state.currentInputValue}
                    type="text" 
                    className="comment-section-add"  
                    placeholder="Add a comment..." 
                />
                <button 
                    
                         type="submit">
                         ...
                </button>
            </form>
        )
    }
}

export default CommentSubmitForm;