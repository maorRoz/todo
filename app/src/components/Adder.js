import React, { Component } from 'react';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(event){
        this.setState({value: event.target.value}); 
    }
    handleOnSubmit(event){
        event.preventDefault();
        console.log(this.state.value);
        this.props.addItemRequest(this.state.value);
        this.setState({value: ''});
    }
  render() {
    return (
        <form onSubmit={this.handleOnSubmit}>
      <div><input value={this.state.value} onChange={this.handleOnChange} type="text"/></div>
      <div><input value='Submit' type="submit"/></div>
      </form>
      
    );
  }
}