import React, { PropTypes } from 'react'
import ENV from '../env.json'
import '../styles/example.scss'

class Example extends React.Component {
  render () {
    return (
      <div className='example'>
        <img src='http://bit.ly/1YEe536'/>
        <h1>
          Example
        </h1>
        <pre>
          {JSON.stringify(ENV)}
        </pre>
        <p>SCSS and JSX Works Too</p>
      </div>
    )
  }
}

export default Example
