import React, { Component } from 'react';
import { ToDoList } from './ToDoList'
import { Stats } from './Stats'
import { AddItem } from './AddItem'
import { Menu } from './Menu'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allListItems: [
        {
          date: "03-16-1987",
          item: 'Add to the list',
          completed: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Menu />
        {(this.props.location.pathname === "/stats") ? <Stats /> : (this.props.location.pathname === "/todolist") ? <ToDoList items={this.state.allListItems}/> : <AddItem />}
      </div>
    );
  }
}
