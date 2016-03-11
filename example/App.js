import React from 'react'
import { render } from 'react-dom'
import ENV from './env.json'

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <img style={{maxWidth: '500px'}} src='http://bit.ly/1YEe536'/>
        <h1>
          Example
        </h1>
        <pre>
          {JSON.stringify(ENV)}
        </pre>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))