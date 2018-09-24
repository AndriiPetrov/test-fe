import React from 'react';


class Form extends React.Component {
    constructor(props){
        super(props)

        this.initialState = {
            title: '',
            body: '',
            userId: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {title, body, userId} = this.state;
        return(
            <form>
                <label>Title</label>
                <input 
                    type="text" 
                    name="title"
                    value={title} 
                    onChange={this.handleChange}/>
                <label>Body</label>
                {/* <input
                    type="text"
                    name="body"
                    value={body}`
                    onChange={this.handleChange}/> */}
                <textarea 
                    name="body"
                    value={body}
                    onChange={this.handleChange}/>
                <label>Pick user</label>
                <select
                    name="userId"
                    value={userId}
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                </select>
                <input 
                    type="button" 
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;