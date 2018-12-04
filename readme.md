# generator-emacs-package [![npm](https://img.shields.io/npm/dt/generator-emacs-package.svg)](https://www.npmjs.com/package/generator-emacs-package) [![npm version](https://img.shields.io/npm/v/generator-emacs-package.svg)](https://npmjs.org/package/generator-emacs-package)

> A [yeoman](https://github.com/yeoman) generator for [GNU Emacs](https://www.gnu.org/software/emacs/) packages

## Install

```bash
npm i -g generator-emacs-package
```

## Use

Create a directory for the new package, `cd` inside and generate the package skeleton with

```bash
yo emacs-package
```

or generate a package defining a [minor-mode](https://www.gnu.org/software/emacs/manual/html_node/emacs/Minor-Modes.html)

```bash
yo emacs-package:minor-mode
```

Finally, address each `TODO:` statement in the generated project.

## License

ISC © Eric Crosson
