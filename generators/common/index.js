const Generator = require('yeoman-generator')

module.exports = class extends Generator {

    createMakefile() {
        this.fs.copyTpl(
            this.templatePath('Makefile'),
            this.destinationPath('Makefile'),
            {
                pkg: this.options.options.pkg
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

    createReadme() {
        this.fs.copyTpl(
            this.templatePath('readme.md'),
            this.destinationPath('readme.md'),
            {
                name: this.options.options.name,
                pkg: this.options.options.pkg,
                tagline: this.options.options.tagline,
                keywords: this.options.options.keywords,
                version: this.options.options.version,
                author: this.options.options.author,
                git_repository: this.options.options.git_repository,
                git_username: this.options.options.git_username,
                useQuelpa: this.options.options.useQuelpa,
                useMelpa: this.options.options.useMelpa,
                useManual: this.options.options.useManual
            }
        )
    }
}