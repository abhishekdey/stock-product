// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import { useReducer, React,ReactDOM } from 'react';
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

export default class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
    //item.done = true;
  }
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App items={items}/>);