const yargs            = require('yargs')
const manifest         = require('./package.json')
const createClassifier = require('./commands/createClassifier')

yargs
.usage('Usage: node index.js <command> [options]')
.command('create', 'creates an image classifier', createClassifier)
.version('version', 'prints the current version of tickbin', manifest.version)
.demand(1)
.strict()
.alias('h', 'help')
.help()
.argv
