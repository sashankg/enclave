#Enclave
An easier way to build modern JavaScript apps.

> _Note: this is very much a proof of concept._

##Getting Started:
```
$ mkdir my-new-app
$ cd my-new-app
$ npm init
$ npm i enclave --save
$ mkdir app
$ touch app/App.js
```

The file `app/App.js` acts as your entry point for webpack. Eventually this will be configurable.

To hook something like React up, all you need to do is select the `enclave` id.
``` js
/* app/App.js */

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to my app!
        </h1>
      </div>
    );
  }
}

// hook into the `enclave` id, which is provided by enclave.
render(<App />, document.getElementById('enclave'));
```
