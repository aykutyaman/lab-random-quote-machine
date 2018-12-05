import React from 'react';
import './App.css';

const App = ({ text, author, fetch }) => (
  <div className="App" id="quote-box">
    <p id="text">{text}</p>
    <p id="author">{author}</p>
    <button onClick={fetch} id="new-quote">New Quote</button>
    <a id="tweet-quote" href="http://www.twitter.com/intent/tweet">Tweet Quote</a>
  </div>
);

export default App;
