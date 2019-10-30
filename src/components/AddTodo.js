import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
           <form onSubmit = {this.onSubmit} className="d-flex mx-auto w-50 mb-2">
            <input type='text' name='title'
            placeholder="Add Todo.." className="mr-2 form-control"
            value={this.state.title}
            onChange={this.onChange} />
                        
            <input
            type="submit"
            value="Submint"
            className="btn btn-primary"
            />
            </form>
        )
    }
}
