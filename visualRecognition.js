const watson = require('watson-developer-cloud')
const config = require('./config.json')

const vr = watson.visual_recognition({
  api_key: config.apiKey,
  version: 'v3',
  version_date: '2016-05-20'
})

module.exports = vr
