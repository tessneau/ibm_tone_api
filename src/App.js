import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    words: "",
    render: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      render: this.state.words
      })
  }

  render() {
    return (
    <div className="App">
      <h1>IBM Watson Tone Analyzer API</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
        words:
          <input type="text" name="words" value={this.state.words} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{this.state.render}</p>
    </div>
    );
  }
}

export default App;
