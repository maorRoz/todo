import React, { Component } from 'react';

export default class App extends Component {
    createList(items){
        let arr = [] 
        items.forEach(element => {
            arr.push(<li key={arr.length}>{element}</li>)
        });
        return arr; 
    }
    render() {
        let list = this.createList(this.props.list)
        return (
        <ul>{list}</ul>
        );
    }
}