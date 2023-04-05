
//import { useReducer,ReactDOM } from 'react';
import React from 'react';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

export default class TodoList extends React.Component {
  //  constructor(props) {
  //   super(props);
  // }

  handleItemClick(item, event) {
    // Write your code here
    item.done = true;
    //console.log(this);
  }

  render() {
    //console.log(this);
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
}
