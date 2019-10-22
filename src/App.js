import React from 'react';
import './App.css';

const creds = require('./ibm.json')
const { API_Key, URL } = creds

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

  // fetchTone = (text) => {
  //   fetch(`${URL}/v3/tone?version=2017-09-21`, {
  //     method: 'GET',
  //     headers: {
  //       'Access-Control-Allow-Headers': "access-control-allow-origin",
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Credentials': 'true',
  //       'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  //     }
  //     })
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  render() {
    this.fetchTone()
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
