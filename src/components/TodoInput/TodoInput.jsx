import React, {Component} from 'react';
import './TodoInput.css';

class TodoInput extends Component {
  
  createNewTodo(event) {
    event.preventDefault();
    var text = document.getElementById('new-todo-input').value;
    if(text) {
      this.props.createNew(text);
      document.getElementById('new-todo-input').value = "";
    }
  }
  
  render() {
    return (
      <form className="TodoListForm" onSubmit={this.createNewTodo.bind(this)}>
        <div className="input-group">
          <input className="form-control"
                 type="text"
                 id="new-todo-input"
                 autoComplete="off"
                 placeholder={this.props.placeholder}>
          </input>
          <span className="input-group-btn">
            <button className="btn btn-secondary addItemButton" type="submit">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </span>
        </div>
        
      </form>
    );
  }
}

export default TodoInput;