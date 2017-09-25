/**
* Theme Generator
*/

module.exports = {
    description: 'Add a glamorous theme',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'name your glamorous theme',
        default: 'secondary'
    }],
    actions: (data) => {

        const actions = [{
            type: 'add',
            path: '../src/themes/{{ name }}/index.ts',
            templateFile: './themes/templates/theme.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'modify',
            path: '../src/index.ts',
            templateFile: './themes/templates/export*From.hbs',
            pattern: /\/\/ Insert themes export here/,
            abortOnFail: true,
        },
        {
            type: 'modify',
            path: '../typings/index.d.ts',
            templateFile: './themes/templates/typingTheme.hbs',
            pattern: /\/\/ Insert exported stuff here/,
            abortOnFail: true,
        }]

        return actions
    },
}
