import React from 'react'
import { render } from 'react-dom'
import Example from './components/Example.jsx'

class App extends React.Component {
  render() {
    return (
      <Example />
    )
  }
}

render(<App />, document.getElementById('root'))
