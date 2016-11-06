import React, {Component} from 'react';
import './CompletedListRow.css';

class CompletedListRow extends Component {
  render() {
    return (
      <div className="row completedListRow">
        <div className="col-sm-12">
          
          <div className="completedButton"
               onClick={() => this.props.moveToTodo(this.props.noteKey)}>
            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          
          <div className="deleteItem"
               onClick={() => this.props.deleteItem(this.props.noteKey)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          
          <div className="completedItem">
            {this.props.note}
          </div>
          
        </div>
      </div>
    );
  }
}

export default CompletedListRow;