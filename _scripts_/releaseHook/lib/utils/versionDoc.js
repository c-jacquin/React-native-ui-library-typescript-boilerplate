const fs = require('fs-extra')
const versionDir = `${process.cwd()}/docs/${version}`

module.exports = async (version) => {
    try {
        await fs.mkdir(versionDir)
    } catch (err) {
        console.error(err)
    }
    await fs.move(`${process.cwd()}/docs/lcov-report`, `${versionDir}/lcov-report`)
    await fs.move(`${process.cwd()}/docs/test-report`, `${versionDir}/test-report`)
}