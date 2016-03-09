/**
 * An array of objects of strings... If we need to change or add prompts to the postinstall script
 * we can do that here. These prompts are formatted to work with the https://github.com/flatiron/prompt
 * library.
 * @type {*[]}
 */
var prompts = [
  {
    description: 'Where do you think I might be able to find your app\'s entry point? (App.js)'.green,
    default: 'App.js',
    type: 'string',
    required: false,
    name: 'entry',
  },
  {
    description: 'Is there a specific name you want me to send your code after I compile it, if so what is it? (dist)'.green,
    default: 'dist',
    type: 'string',
    required: false,
    name: 'output',
  },
  {
    description: 'What port would you like this all to run on? (8080)'.green,
    default: '8080',
    type: 'number',
    required: false,
    name: 'port'
  },
  {
    description: 'Where does (or will) your index.html file live? (index.html)'.green,
    default: 'index.html',
    type: 'string',
    required: false,
    name: 'index'
  },
  {
    description: 'Would you like me to turn live reload on in your app? true/false'.green,
    message: 'Please enter a boolean, true or false'.red,
    type: 'boolean',
    required: true,
    name: 'live'
  }
]

module.exports = prompts
