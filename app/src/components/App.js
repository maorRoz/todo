import React, { Component } from 'react';
import TodoListView from './TodoListView'
import Adder from './Adder'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {items:[]};
    this.removeList = this.removeList.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(item){
    let changedItems = this.state.items;
    changedItems.push(item);
    this.setState({items: changedItems});
  }

  removeList(item){
    this.setState({items:[]});
  }

  render() {
    return (
      <div>
        <TodoListView list={this.state.items}/>
        <Adder addItemRequest={this.addItem}/>
        <button onClick={this.removeList} data-cy='clean'>Clean List</button>
      </div>
    );
  }
}

export default App;
