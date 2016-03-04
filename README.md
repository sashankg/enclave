#Enclave
An easier way to build modern JavaScript apps.

> _Note: this is very much a proof of concept._

##Getting Started:
```
$ mkdir my-new-app
$ cd my-new-app
$ npm init
$ npm i enclave --save
```

Create an entry point for your application:
```
$ mkdir src && touch src/Main.js
```
Write some code, if you're doing React, something like this should work:
``` js
/* src/Main.js */

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

You then want to create a `.enclaverc` file to inform enclave on some build settings.
```
$ touch .enclaverc
```

Configure your enclaverc file:

``` json
/* .enclaverc */
{
  "entry": "src/App.js",
  "index": "src/index.html",
  "output": "./dist",
  "port": "3000"
}

```

Once you're ready to compile your code, run this awkward command in your terminal:
```
$ node node_modules/enclave/index.js
```
