import React, {Component} from 'react';
import TodoInput from '../TodoInput/TodoInput.jsx';
import TodoListRow from '../TodoListRow/TodoListRow.jsx';
import CompletedListRow from '../CompletedListRow/CompletedListRow.jsx';
import './TodoList.css';

class TodoList extends Component {
  
  createNewTodo(noteContent) {
    this.props.todoNotes.push({note:noteContent});
    this.props.updateTodo(this.props.todoNotes);
  }
  
  deleteTodoItem(key) {
    this.props.todoNotes.splice(key,1);
    this.props.updateTodo(this.props.todoNotes);
  }
  
  deleteCompletedItem(key) {
    this.props.completedNotes.splice(key,1);
    this.props.updateCompleted(this.props.completedNotes);
  }
  
  moveToTodo(key) {
    var temp = this.props.completedNotes[key];
    this.props.completedNotes.splice(key,1);
    this.props.todoNotes.push(temp);
    this.props.updateTodo(this.props.todoNotes);
  }
  
  moveToCompleted(key) {
    var temp = this.props.todoNotes[key];
    this.props.todoNotes.splice(key,1);
    this.props.completedNotes.push(temp);
    this.props.updateCompleted(this.props.completedNotes);
  }
  
  render() {
    
    var todoNotes = []; //this.props.allNotes.todo;
    var completedNotes = []; //this.props.allNotes.completed;
    
    this.props.todoNotes.forEach(function(noteElement, key) {
      todoNotes.push(<TodoListRow key={key} 
                                  noteKey={key}
                                  note={noteElement.note}
                                  moveToCompleted={this.moveToCompleted.bind(this)}
                                  deleteItem={this.deleteTodoItem.bind(this)}></TodoListRow>);
    }, this);
    this.props.completedNotes.forEach(function(noteElement, key) {
      completedNotes.push(<CompletedListRow key={key}
                                            noteKey={key}
                                            note={noteElement.note}
                                            moveToTodo={this.moveToTodo.bind(this)}
                                            deleteItem={this.deleteCompletedItem.bind(this)}></CompletedListRow>);
    }, this);
    
    return (
      <div className="todoListWrapper">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 listContent">
          <TodoInput placeholder="New Item" createNew={this.createNewTodo.bind(this)}></TodoInput>
          <div className="todoItemsWrapper">
            {todoNotes}
          </div>
          <hr className="listSeparator"></hr>
          <div className="completedItemsWrapper">
            {completedNotes}
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    );
  }
}

export default TodoList;