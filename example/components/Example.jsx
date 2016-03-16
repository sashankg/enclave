import React, { PropTypes } from 'react'
import ENV from '../env.json'
import image from '../logo.svg'
import '../styles/example.scss'

class Example extends React.Component {
  render () {
    return (
      <div className='example'>
        <div style={{width: '100px'}} dangerouslySetInnerHTML={{__html: image}} />
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
