const Generator = require('yeoman-generator')

const os = require('os')
const path = require('path')

const now = new Date()
const date_year = now.getFullYear()

var input
var github_username

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'pkg',
            message: 'Your package name (no word-breaks)',
            default: path.basename(this.appname.replace(/ /g, '-'))  // defaults to current folder name
        }, {
            type: 'input',
            name: 'tagline',
            message: 'Your project tagline',
            default: 'Brief and fresh sentence fragment'
        }, {
            type: 'input',
            name: 'keywords',
            message: 'Keywords',
            default: 'For Emacs package managers'
        }, {
            type: 'input',
            name: 'git_repository',
            message: 'Your hosted git repository',
            default: `https://github.com/${os.userInfo().username}/${this.appname.replace(/ /g, '-')}`
        }, {
            type: 'input',
            name: 'version',
            message: 'Initial project version',
            default: '0.0.1'
        }, {
            type: 'input',
            name: 'author',
            message: 'Your name',
            default: os.userInfo().username
        }, {
            type: 'input',
            name: 'email',
            message: 'Your email address',
            default: `${os.userInfo().username}@gmail.com`
        }]).then((answers) => {
            input = answers
            github_username = answers.git_repository.split('/').slice(-2)[0]
        })
    }

    createReadme() {
        this.fs.copyTpl(
            this.templatePath('readme.md'),
            this.destinationPath('readme.md'),
            {
                name: input.name,
                pkg: input.pkg,
                tagline: input.tagline,
                keywords: input.keywords,
                version: input.version,
                author: input.author,
                git_repository: input.git_repository,
                github_username: github_username
            }
        )
    }

    createMakefile() {
        this.fs.copyTpl(
            this.templatePath('Makefile'),
            this.destinationPath('Makefile'),
            {
                pkg: input.pkg
            }
        )
    }

    createTravisYml() {
        this.fs.copyTpl(
            this.templatePath('.travis.yml'),
            this.destinationPath('.travis.yml'),
            {}
        )
    }

    createGitignore() {
        this.fs.copyTpl(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore'),
            {}
        )
    }

    createElisp() {
        this.fs.copyTpl(
            this.templatePath('package.el'),
            this.destinationPath(`${input.pkg}.el`),
            {
                name: input.name,
                date_year: date_year,
                pkg: input.pkg,
                email: input.email,
                tagline: input.tagline,
                keywords: input.keywords,
                version: input.version,
                author: input.author,
                git_repository: input.git_repository,
                github_username: github_username
            }
        )
    }
}
