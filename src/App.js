import React from 'react'
import './App.css'

const App = ({ text, author, fetch }) => (
  <div className="App" id="quote-box">
    <div className="card">
      <p id="author">{author}</p>
      <p id="text">{text}</p>
      <footer>
        <button className="outline" onClick={fetch} id="new-quote">New Quote</button>
        <a id="tweet-quote" href="http://www.twitter.com/intent/tweet">Tweet Quote</a>
      </footer>
    </div>
    <div>by <a href="https://github.com/aykutyaman">Aykut Yaman</a></div>
  </div >
)

export default App
