import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((text, id) => <Todo key={id} text={text} />)
 
  render() {
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
  