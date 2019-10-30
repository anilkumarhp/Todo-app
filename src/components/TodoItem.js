import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p>
                <input type='checkbox' className="mr-1" onChange={this.props.markComplete.bind(this, id)} /><span className="mr-2">{' '} { title }</span>
                <button className="btn btn-secondary px-3 py-1" onClick={this.props.delTodo.bind(this, id)}>Del</button>
            </p>
            </div>
        )
    }
}

export default TodoItem


TodoItem.propType = {
    todo: PropTypes.object.isRequired
}