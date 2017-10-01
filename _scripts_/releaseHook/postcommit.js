const { exec } = require('child-process-promise')
const fs = require('fs-extra')
const path = require('path')
const { generateDoc } = require('@chazzz/simple-doc')    
const { updateExpoVersion, updateChangeLog, versionDoc } = require('./lib')
const pkg = require(path.resolve(process.cwd(), 'package.json'))

const changelogPath = path.resolve(process.cwd(), 'CHANGELOG.md')

(async () => {
    try {
        let changelog = await fs.readFile(changelogPath, { encoding: 'utf-8' })
        await exec('npm start test.cover')
        await exec('npm start build')

        await versionDoc(pkg.version)
        await updateExpoVersion(pkg.version)

        changelog = await updateChangeLog(pkg.version, changelog, changelogPath)

        await generateDoc({
            markdown: changelog,
            pkg,
        })
        await exec('git add -A')
        await exec('git commit --amend --no-edit')
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        process.exit(0)
    }
})()