import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    text: '',
    author: ''
  }
  fetch = () => {
    axios.get('/api/1.0/?method=getQuote&key=457653&format=json&lang=en')
      .then(response => {
        this.setState({
          author: response.data.quoteAuthor,
          text: response.data.quoteText
        })
      })
      .catch(e => console.log(e))
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
        <button onClick={() => this.fetch()} id="new-quote">New Quote</button>
        <a id="tweet-quote" href="http://www.twitter.com/intent/tweet">Tweet Quote</a>
      </div>
    );
  }
}

export default App;
