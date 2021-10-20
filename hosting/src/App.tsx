import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const FunctionHost =
  process.env.NODE_ENV === 'production'?
  'https://us-central1-medy-firebase-sample.cloudfunctions.net':
  'http://localhost:5001/medy-firebase-sample/us-central1'

function App() {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    fetch(`${FunctionHost}/helloWorld`)
    .then(response=>{
      console.log(response)
      return response.text()
    })
    .then(data=>{
      console.log(data)
      setMsg(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
