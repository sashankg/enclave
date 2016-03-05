<p align="center">
  <img alt="enclave" src="http://i1264.photobucket.com/albums/jj488/eanplatter1/enclave-logo_zpslmhskufg.png" width="546">
</p>

<p align="center">
  A lightweight API for compiling React applications with Webpack and Babel.
</p>

##Getting Started:
```
$ mkdir my-new-app
$ cd my-new-app
$ npm init
$ npm i enclave --save
```

Enclave will then take you through a series of prompts. The answers to these prompts will create a `.enclaverc` file in your application's root. This file is what enclave uses to reference your build. If you need to change any of your settings, you can do that directly in the `.enclaverc` file.

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

Once you're ready to compile your code, run this awkward command in your terminal:
```
$ node node_modules/enclave/index.js
```

Then find your app at `http://localhost:3000`
> If you don't specify a port in your .enclaverc file then your app will be served on port 8080.
