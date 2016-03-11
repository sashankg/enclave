#Contributing to enclave

Enclave is a baby of a project right now, there is a lot of room for growth. If you're interested in contributing please do so!

##Philosophy
This project comes from a combination of two things, a complexity of configuring React applications with Webpack and Babel (especially for beginners), and my experience with compile-to-JavaScript languages, like Elm or CoffeeScript.

I thought it would be nice to be able to write JSX and ES* the same way I wrote Elm. Just do it, and let some magic happen behind the scenes to make it browser compatible.

Enclave was created with this approach in mind.

We are essentially creating a balancing act between a robust tool and a simple API. We try to avoid adding friction to enclave's users. 

Frontend development is inundated with complex tools and frameworks. Complexity isn't necessarily a bad thing, and is often requisite in order to solve complex problems, but the more we can do with a simple API the better.

##Code of conduct.
Enclave as a tool is focused on reducing friction, and so is enclave's contributing. An open and frictionless environment of contributers is what we're aiming for. Be respectfut, don't say things you wouldn't say to someone's face.

## Sandbox App
There is an `example/` directory in enclave's root. In there you will find a basic app.

To run the example app run `$ npm run example`.

This is helpful if you're testing out webpack loaders or babel configurations.

##Postinstall
The `postinstall/` directory is where the prompts are generated for the user after they install enclave. You can currently test them out by just running `$ node postinstall/index.js`.

##Tests
Currently there are no tests, this is a problem. >.<
  
## Pull Requests
To make a PR, fork the repo, update it, and submit the PR.
Make sure you do the following before making a PR:
* Try to rebase commits so there is only 1 commit per PR. `$ git rebase -i HEAD~<NUMBER_OF_COMMITS>`
* Makesure your fork is up to date, it can be tricky trying to make a PR, and then rebase it to master. It's easier to do before you PR.
* If you made a visual change, provide screenshots in the PR description.
* If your PR contains anything you think might be hard to grok, explain it with diff comments in github. (After you submit your PR)

## Code Conventions
* No semicolons
* Commas dangle `,`
* 2 spaces for indentation (no tabs)
* Prefer `'` over `"`
* 120 character line length
* Write "attractive" code
* Do not use the optional parameters of `setTimeout` and `setInterval`

##Contact
Reach ean on twitter @eanplatter or email eanplatter+enclave@gmail.com