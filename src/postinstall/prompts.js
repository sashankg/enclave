var chalk = require('chalk')

/**
 * An array of objects of strings... If we need to change or add prompts to the postinstall script
 * we can do that here. These prompts are formatted to work with the https://github.com/flatiron/prompt
 * library.
 * @type {*[]}
 */
var prompts = [
  {
    description: chalk.yellow('Where do you think I might be able to find your app\'s entry point?'),
    default: 'App.js',
    type: 'string',
    required: false,
    name: 'entry',
  },
  {
    description: chalk.cyan('Where does (or will) your index.html file live?'),
    default: 'index.html',
    type: 'string',
    required: false,
    name: 'index',
  },
  {
    description: chalk.green('Is there a specific name you want me to send your code after I compile it, if so what is it?'),
    default: 'dist',
    type: 'string',
    required: false,
    name: 'output',
  },
  {
    description: chalk.blue('What port would you like this all to run on?'),
    default: '8080',
    type: 'number',
    required: false,
    name: 'port',
  },
  {
    description: chalk.red('Would you like me to install React for you?'),
    default: 'no',
    type: 'string',
    required: false,
    name: 'autoInstall',
  },
]

module.exports = prompts
