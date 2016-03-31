# Walkthrough
Sometimes when you're interested in contributing to an open source project, you find yourself kind of lost. Where do you start? What does what?

The anatomy of an open source project can be foreign at best; Enclave is a relatively simple and small codebase, so I am going to try to explain how to navigate through the codebase. I am hoping this works sort of like my old Pokemon Red Version strategy guide for my Gameboy Color. I might even throw in some sick hacks, like the ability to get Mew in the American version (greatest achievement of my young life).

## Level 1 - Postinstall [(src/postinstall/)](./src/postinstall)

### Main Quest - [index.js](./src/postinstall/index.js)

#### Description
You enter a file and see like 98 lines of code. Most of the methods are documented so they should be relatively easy to understand, but as a whole it might not be entirely clear what the file does.

This file gets ran when someone installs Enclave via `$ npm install enclave`. So when you see that sweet ASCII art after installing, it's because your terminal just ran `$ node node_modules/enclave/src/postinstall/index.js`, so node is executing this file. It's the first thing an Enclave user gets to interact with.

#### Dependencies
It has 3 third-party dependencies: `['shelljs', 'chalk', 'prompt']`. These are node modules that this file relies on.

  - **[shelljs](https://github.com/shelljs/shelljs)** allows us to run shell commands like `ls` or `sed` inside this file. It's nice because it polyfills shell commands for different terminal environments, like on a Windows machine. We need it because Enclave is going to do things in the user's command line.

  - **[chalk](https://github.com/chalk/chalk)** chalk gives us the ability to color our CLI text.

  - **[prompt](https://github.com/flatiron/prompt)** gives us the ability to ask questions and record answers in the command line. The same way `$ npm init` prompts you to answer questions.

It has 3 internal dependencies as well: `['./prompts', '../cli-helpers/install-spinner', './clientFiles']`.

  - **[./prompts](./src/postinstall/prompts.js)** is where we keep all of the text of the prompts we want to ask the user during the postinstall process. We also keep details about the prompt here, like if it's required or if it has a default value.

  - **[../cli-helpers/install-spinner](./src/cli-helpers/install-spinner.js)** is where we define a custom spinner for when our post install process is wrapping up.

  - **[./clientFiles](./src/postinstall/clientFiles.js)** just lists out where the enclave user's files should be living, and where to look for them.

### Side Quest - [prompts.js](./src/postinstall/prompts.js)

#### Description
This file contains a single exported array of JavaScript objects. Each object represents a question Enclave asks the user during the postinstall. If you wanted to add, or edit, a postinstall prompt, this is where you would do it.

#### Dependencies
It has 1 third party dependency: 'chalk'.

  - **[chalk](https://github.com/chalk/chalk)** chalk gives us the ability to color our CLI text.

### Side Quest - [install-spinner.js](./src/cli-helpers/install-spinner.js)

#### Description
When you finish your Enclave installation, you get a spinner to designate that the application is getting everything ready for you. This file contains that spinner and it's settings.

#### Dependencies
Is has 1 third party dependency: 'Ora'.

  - **[Ora](https://github.com/sindresorhus/ora)** gives us the ability to make custom CLI spinners.

### Side Quest - [clientFiles.js](./src/postinstall/clientFiles.js)

#### Description
This file contains a single exported JavaScript object; nothing special really. It's just a place to keep where we want to inject Enclave stuff. If for some reason we want to move from creating an `enclave.js` file in the users root to something like `enclave.json` we would edit that here.

#### Dependencies
It has no dependencies.

## Level 2 - Eject [(src/eject/)](./src/eject)

### Main Quest - [index.js](./src/eject/index.js)

#### Description
As you enter the file you see approximately 81 lines of code. This is the file that fuels Enclave's `$ npm run enclave-eject` command.

Enclave simplifies a users project by making assumptions about how the user wants to build their React app. There's a possibility that Enclave won't always be convenient for a project. In order to make Enclave helpful but not intrusive we made it possible for a user to eject Enclave from their project.

To eject Enclave, we have to move our internal Webpack config files to the users app, change some file paths, remove some Enclave scripts, and run a sweet spinner! This file facilitates those actions.

#### Dependencies
It has 1 third party dependency: 'shelljs'.

  - **[shelljs](https://github.com/shelljs/shelljs)** allows us to run shell commands like `ls` or `sed` inside this file. It's nice because it polyfills shell commands for different terminal environments, like on a Windows machine. We need it because Enclave is going to do things in the user's command line.

It has 2 internal dependencies: ['./cli-helpers/eject-spinner.js', './requiredDependencies.js'].

  - **[../cli-helpers/eject-spinner](./src/cli-helpers/eject-spinner.js)** is where we define a custom spinner for when our eject process is wrapping up.

  - **[./requiredDependencies](./src/eject/requiredDependencies.js)** Just an array of dependencies that Enclave will need to install into the users `package.json` file upon ejection; Enclave previously managed those dependencies, but now won't since it's being ejected.
