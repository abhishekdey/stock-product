// /* eslint-disable react/jsx-no-undef */
// import {ThemeContext, themes} from './theme-context';
// import {ThemedButton} from './themed-button';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // The ThemedButton button inside the ThemeProvider
//     // uses the theme from state while the one outside uses
//     // the default dark theme
//     return (
//       // eslint-disable-next-line react/jsx-no-undef
//       <div>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <Section>
//           <ThemedButton />
//         </Section>
//       </div>
//     );
//   }
// }

// //ReactDOM.render(<App />, document.root);

// export default App;

// import Heading from './Heading.js';
// import Section from './Section.js';
// import React from 'react';
// import FilterableProductTable from './FilterableProductTable';
// import {DATA} from "../constants";

// export default function Page() {
//   return (
//     <Section level={1}>
//       <Heading>Title</Heading>
//       <Section level={2}>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section level={3}>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section level={4}>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//       <FilterableProductTable products={DATA}/>
//     </Section>
//   );
// }


// React is loaded and is available as React and ReactDOM
// imports should NOT be used
//import { useReducer,ReactDOM } from 'react';
import TodoList from './TodoList';

import React from 'react';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  //componentWillMount333() {console.log('componentWillMount333');}
  //deprecated
  // componentWillMount() {  
  //   fetch("https://jsonplaceholder.typicode.com/todos/3")
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ todo: json });
  //     });
  // console.log('componentWillMount');
  // }

  static getDerivedStateFromProps(props, state) {console.log(state,props); }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/3")
      .then(response => response.json())
      .then(json => {
        this.setState({ todo: json });
      });
    console.log('componentDidMount'); setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)}
  shouldComponentUpdate() {console.log('shouldComponentUpdate');return true;}
  getSnapshotBeforeUpdate() {console.log('getSnapshotBeforeUpdate');}
  componentDidUpdate() {console.log('componentDidUpdate');}
  
  render() {
    return ( 
    <TodoList
      items={this.props.items}
      onListClick={(event) => console.log("List clicked!")}
      onItemClick={(item, event) => { console.log(item, event) }}
    />
  )
 }
}
  

//document.body.innerHTML = "<div id='root'></div>";
//const root = ReactDOM.render(document.getElementById("root"));

//root.render(<App items={items}/>);
//ReactDOM.render(<App items={items}/>, document.root);













// React is loaded and is available as React and ReactDOM
// imports should NOT be used
// class Input extends React.PureComponent {
//   render() {
//     let {forwardedRef, ...otherProps} = this.props; 
//     return <input {...otherProps} ref={forwardedRef} />;
//   }
// }

// const TextInput = React.forwardRef((props, ref) => {
//   return <Input {...props} forwardedRef={ref} />
// });

// class FocusableInput extends React.Component {
  
//   ref = React.createRef()

//   render() {
//     return <TextInput ref={this.ref} />;
//   }

//   // When the focused prop is changed from false to true, 
//   // and the input is not focused, it should receive focus.
//   // If focused prop is true, the input should receive the focus.
//   // Implement your solution below:
//   componentDidUpdate(prevProps) {}
  
//   componentDidMount() {}
// }

// FocusableInput.defaultProps = {
//   focused: false
// };

// const App = (props) => <FocusableInput focused={props.focused} />;

// document.body.innerHTML = "<div id='root'></div>";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);