var prompts = [
  {
    description: 'Where do you think I might be able to find your app\'s entry point? Example: src/App.js'.green,
    message: 'This information is required',
    type: 'string',
    required: true,
    name: 'entry',
  },
  {
    description: 'Is there a specific name you want me to send your code after I compile it, if so what is it?'.green,
    message: 'This information is required',
    type: 'string',
    required: true,
    name: 'output',
  },
  {
    description: 'What port would you like this all to run on? Example: 3000. If you don\'t specify a port I will automatically send it to port 8080.'.green,
    message: 'This information is required',
    type: 'string',
    required: true,
    name: 'port'
  },
  {
    description: 'Where does (or will) your index.html file live? Example: src/index.html'.green,
    message: 'This information is required',
    type: 'string',
    required: true,
    name: 'index'
  },
  {
    description: 'Would you like me to turn live reload on in your app? y/n'.green,
    message: 'This information is required',
    type: 'string',
    required: true,
    name: 'live'
  }
]

module.exports = prompts
