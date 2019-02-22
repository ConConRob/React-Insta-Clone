import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    border-top: 1px solid rgb(199, 199, 199);
    margin-top: 15px;
    input{
        border: none;
        
        margin-top: 5px;
        padding: 15px;
        width: 95%;
        font-size: 16px;
    }
    input:focus,
    input:active{
        outline: none;
        
    }
    button{
        border:none;
        background: none;
        font-size: 20px;
        font-weight: 500;
    }
    button:focus,
    button:active{
        outline: none;
    }
`

class CommentSubmitForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentInputValue:'',
        }
    }

    handleSubmit=(event, text ,id) => {
        event.preventDefault();
        this.props.addComment(this.props.user,text,id);
        this.setState({currentInputValue:''})
    }
    handleChange=(event)=> {
        this.setState({currentInputValue: event.target.value})
    }
    render(){
        return (
            <StyledForm
                onSubmit={(event) => {
                    this.handleSubmit(event,this.state.currentInputValue,this.props.id)
            }}
            >
                <input 
                    
                    onChange={(event)=>this.handleChange(event)} 
                    value={this.state.currentInputValue}
                    type="text" 
                    placeholder="Add a comment..." 
                />
                <button 
                     type="submit">
                         ...
                </button>
            </StyledForm>
        )
    }
}

export default CommentSubmitForm;

CommentSubmitForm.propTypes = {
    id: PT.string.isRequired,
    addComment: PT.func.isRequired,
    user: PT.string.isRequired,
}