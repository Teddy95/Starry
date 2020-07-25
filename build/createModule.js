var fs = require('fs')
var path = require('path')

var fileContent = fs.readFileSync(path.join(__dirname, '../src/script/Starry.js')).toString() + `\r\nmodule.exports = Starry\r\n`
fs.writeFileSync(path.join(__dirname, '../src/script/module.js'), fileContent)
