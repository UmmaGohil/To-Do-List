import React from 'react';
import ReactDOM from 'react-dom';

const textAreaStyles = {
  width: 235,
  margin: 5
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((items) => <li>{items}</li>)
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>"To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

ReactDOM.render(<ToDo/>, document.getElementById('app'));
