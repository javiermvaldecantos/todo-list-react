import React, { Component } from 'react';
//import logo from './logo.svg';
import SiteHeader from './components/SiteHeader/SiteHeader.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
//import fs from 'fs';
//var fs = require('fs');

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todo: require('./data/todo.json'),
      completed: require('./data/completed.json')
    }
  }
  
  updateTodo(newTodo) {
    this.setState({
      todo: newTodo
    });
//    fs.writeFile('./data/todo.json', JSON.stringify(newTodo), function (err) {
//      if (err) {
//          return console.log(err);
//      }
//      this.setState({
//        todo: newTodo
//      });
//      console.log('stock.json updated successfully');
//    });
  }
  
  updateCompleted(newCompleted) {
    this.setState({
      completed: newCompleted
    });
//    fs.writeFile('./data/completed.json', JSON.stringify(newCompleted), function (err) {
//      if (err) {
//          return console.log(err);
//      }
//      this.setState({
//        completed: newCompleted
//      });
//      console.log('stock.json updated successfully');
//    });
  }
  
  render() {
    
    return (
      <div className="App">
        <SiteHeader siteTitle="My Notes"></SiteHeader>
        <TodoList todoNotes={this.state.todo}
                  completedNotes={this.state.completed}
                  updateTodo={this.updateTodo.bind(this)}
                  updateCompleted={this.updateCompleted.bind(this)}></TodoList>
      </div>
    );
  }
  
}

export default App;
