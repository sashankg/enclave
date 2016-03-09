<p align="center">
  <img alt="enclave" src="http://i1264.photobucket.com/albums/jj488/eanplatter1/enclave-logo_zpslmhskufg.png" width="546">
</p>

<p align="center">
  A lightweight API for compiling React applications with Webpack and Babel.
</p>

##Philosophy
This project comes from a combination of two things, a complexity of configuring React applications with Webpack and Babel (especially for beginners), and my experience with compile-to-JavaScript languages, like Elm or CoffeeScript.

I thought it would be nice to be able to write JSX and ES201* the same way I wrote Elm. Just do it, and let some magic happen behind the scenes to make it browser ready.

With this approach in mind I started with the API I wanted for something like this. Disclosure: currently I am using some antiques of 2015 like HRM, and Babel5, primarily for convenience. I am also using Webpack. 

What I would like to do is eventually level enclave to the point where it maintains a sane API but is less reliant on Webpack, maybe even do the compile myself.

All in all, this is open experimentation, and not production worthy in any sense. Hopefully if you're wanting to get started with React you'll find Enclave is a helpful tool to get you up and running quickly.



##Getting Started:
```
$ mkdir my-new-app
$ cd my-new-app
$ npm init
$ npm install enclave --save
```

Enclave will then take you through a series of prompts. The answers to these prompts will create a `enclave.js` file in your application's root. This file is what enclave uses to reference your build. If you need to change any of your settings, you can do that directly in the `enclave.js` file.

Create an entry point for your application:
```
$ mkdir src && touch src/Main.js src/index.html
```
Write some code, something like this should work:
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
> _Also, this is where you would do things like hook in a cdn or google fonts or whatevs._

Enclave will _automagically_ add a script to your `package.json` file which will allow you to run everything.
To run it, type the following in your terminal:
```
$ npm start
```
> _If you want to edit your scripts, you can just move the start command somewhere else._

Then find your app at `http://localhost:8080`
> _If you set your port to something other than 8080, then go there instead!_.

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

##Contributing
If you're interested in contributing please make a PR. The code is pretty rocky right now, but I'd be stoked to see some participation. I've tried to document the code so that it's understandable how things work together. It's pretty small at the moment.

Just make a fork and a PR!
