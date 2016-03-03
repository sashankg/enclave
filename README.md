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

Enclave will then take you through a series of prompts. The answers to these prompts will create a `enclave.js` file in your application's root. This file is what enclave uses to reference your build. If you need to change any of your settings, you can do that directly in the `enclave.js` file.

Create an entry point for your application:
```
$ mkdir src && touch src/Main.js src/index.html
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
render(<App />, document.getElementById('root'));
```

Configure your `index.html` file to have something with the id your react app is looking to hook into ("root" in this case)
``` html
<!-- src/index.html -->
<html>
<head>
  <title>my app</title>
</head>
<body>
  <div id='root'></div>
</body>
</html>
```

Enclave will automagically add a script to your `package.json` file which will allow you to run everything.
To run it, type the following in your terminal:
```
$ npm start
```

If you want to edit your scripts, you can just move the start command somewhere else.

Then find your app at `http://localhost:3000`
> If you don't specify a port in your enclave.js file then your app will be served on port 8080.

##Currently supported settings

When enclave is installed in your project, it creates an `enclave.js` file, this is where your settings are stored. Currently supported settings are:
  - entry: {string} The relative path of your entry file, it tells Webpack where to start compiling. Ex. "src/App.js"
  - output: {string} The relative path and name of the directory you want Webpack to spit your compiled code into. Ex. "dist"
  - port: {number} The port where you want your app to run. Ex. 3000
  - index: {string} The relative path of your `index.html` file. Ex. "src/index.html"
  - live: {boolean} Whether you want live-reload or not. Takes in "t", "f", "true", or "false"

After your complete enclave's prompts, you'll find a `enclave.js` file in your app. If you need to edit any of the answers you gave you can do that here. It should look something like this:

```js
/* enclave.js */
exports.entry = "src/App.js"
exports.output = "dist"
exports.port = 3000
exports.index = "src/index.html"
exports.live = true
```
