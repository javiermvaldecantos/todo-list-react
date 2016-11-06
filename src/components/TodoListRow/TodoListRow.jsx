import React, {Component} from 'react';
import './TodoListRow.css';

class TodoListRow extends Component {
  
  render() {
    return (
      <div className="row todoListRow">
        <div className="col-sm-12">
          
          <div className="todoButton"
               onClick={() => this.props.moveToCompleted(this.props.noteKey)}>
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
          
          <div className="deleteItem"
               onClick={() => this.props.deleteItem(this.props.noteKey)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          
          <div className="todoItem">
            {this.props.note}
          </div>
          
        </div>
      </div>
    );
  }
}

export default TodoListRow;