const fs = require('fs')
const vr = require('../visualRecognition')

function builder(yargs) {
  return yargs
  .usage('Usage: node index.js create <name> <positive images> <negative images>')
  .example(
    'node index.js create dog ./dogs.zip ./not-dogs.zip',
    'create a dog classifier'
  )
}

function handler(argv) {
  const name     = argv._[1]
  const positive = argv._[2]
  const negative = argv._[3]

  var params = {
    name,
    [name + '_positive_examples']: fs.createReadStream(positive),
    negative_examples: fs.createReadStream(negative)
  }

  vr.createClassifier(params, (err, res) => {
    if (err) return console.error(err)

    console.log('The following classifier was created')
    console.log(JSON.stringify(res, null, 2))
  })
}

module.exports = { builder, handler }
