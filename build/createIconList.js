var fs = require('fs')
var path = require('path')

function getBase64String (type) {
	return "data:image/svg+xml;base64," + fs.readFileSync(path.join(__dirname, `../dist/icons/${type}.svg`)).toString('base64')
}

var icons = {
	blank: getBase64String('blank'),
	active: getBase64String('active'),
	hover: getBase64String('hover')
}

fs.writeFileSync(path.join(__dirname, '../src/script/icons.json'), JSON.stringify(icons))
