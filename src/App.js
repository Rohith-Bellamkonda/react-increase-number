import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }
  add = () => {
    this.setState({ result: this.state.result + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <button onClick={this.add}>Click Boy! </button>
      </div>
    );
  }
}
export default App;
