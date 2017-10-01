module.exports = async (version, changelog, changelogPath) => {
    const fs = require('fs-extra')

    const newChangelog = changelog.replace(
        `<a name="${version}"></a>`,
        `<div style="text-align:center;"><div class="btn-group">
            <a class="btn btn-primary btn-lg active" href="./${version}/lcov-report">coverage report</a>
            <a class="btn btn-primary btn-lg active" href="./${version}/test-report">test report</a>
            <a class="btn btn-primary btn-lg active" href="./${version}/doc">ts doc</a>
        </div></div>`
    )

    await fs.writeFile(
        changelogPath,
        newChangelog
    )

    return newChangelog
}
