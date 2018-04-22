import React, { Component } from 'react';
import { ToDoList } from './todolist/ToDoList'
import { Stats } from './Stats'
import { AddItem } from './AddItem'
import { Menu } from './Menu'
import { CreateAccount } from "./loggedout/CreateAccount"

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allListItems: 
        {
          date: "03-16-1987",
          item: 'Add to the list',
          completed: false
        }
    }
  }

  render() {
    return (
      <div className="App">
        <Menu />
        {(this.props.location.pathname === "/stats") ? <Stats /> : (this.props.location.pathname === "/todolist") ? <ToDoList date={this.state.allListItems.date} item={this.state.allListItems.item} completed={this.state.allListItems.completed}/> : (this.props.location.pathname==="/create-account") ? <CreateAccount /> : <AddItem />}
      </div>
    );
  }
}
