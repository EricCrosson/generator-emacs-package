const Generator = require('yeoman-generator')

const os = require('os')
const path = require('path')

const now = new Date()
const date_year = now.getFullYear()


const parse = require('parse-git-config')
const git_config = parse.sync({path: `${os.homedir()}/.gitconfig`})

var git_username = (git_config.github || {}).user || os.userInfo().username
const git_full_name = git_config.user.name
const git_email = git_config.user.email

var input

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
            type: 'list',
            name: 'keywords',
            message: "Keyword (see `finder-known-keywords' for information)",
            choices: ["abbrev", "bib", "c", "calendar", "comm",
                      "convenience", "data", "docs", "emulations",
                      "extensions", "faces", "files", "frames", "games",
                      "hardware", "help", "hypermedia", "i18n", "internal",
                      "languages", "lisp", "local", "maint", "mail",
                      "matching", "mouse", "multimedia", "news", "outlines",
                      "processes", "terminals", "tex", "tools", "unix",
                      "vc", "wp"]
        }, {
            type: 'input',
            name: 'git_repository',
            message: 'Your hosted git repository',
            default: `https://github.com/${git_username}/${this.appname.replace(/ /g, '-')}`
        }, {
            type: 'input',
            name: 'version',
            message: 'Initial project version',
            default: '0.0.1'
        }, {
            type: 'input',
            name: 'author',
            message: 'Your name',
            default: git_full_name
        }, {
            type: 'input',
            name: 'email',
            message: 'Your email address',
            default: git_email
        }]).then((answers) => {
            input = answers
            git_username = answers.git_repository.split('/').slice(-2)[0]
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
                git_username: git_username
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
                pkg_group: input.pkg.replace(/-mode/, ''),
                email: input.email,
                tagline: input.tagline,
                keywords: input.keywords,
                version: input.version,
                author: input.author,
                git_repository: input.git_repository,
                git_username: git_username
            }
        )
    }
}
