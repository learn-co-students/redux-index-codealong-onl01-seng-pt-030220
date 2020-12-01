import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

    //TodosContainer is mapping over the todos it received from Redux, passing the value of each todo into a child component, Todo.
    //Todo in this case doesn't have any Redux related code, and is a regular, functional component
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render () {
        return(
            <div>
                {this.renderTodos()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);