const fs = require('fs-extra')
const componentGenerator = require('./component')
const capitalizeFirstLetter = require('./utils/string')

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator)

    plop.addHelper('pascal', capitalizeFirstLetter)
    plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
    plop.addHelper('capitalize', (name) => name.toUpperCase())
}
