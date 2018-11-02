# <%= pkg %> [![Build Status](https://travis-ci.org/<%= github_username %>/<%= pkg %>.svg?branch=master)](https://travis-ci.org/<%= github_username %>/<%= pkg %>)

> <%= tagline %>

## Install

With [Quelpa](https://framagit.org/steckerhalter/quelpa)

``` {.sourceCode .lisp}
(use-package <%= pkg %>
  :quelpa (<%= pkg %>
           :fetcher github
           :repo "<%= github_username %>/<%= pkg %>"))
```

From [MELPA](https://melpa.org/)

``` {.sourceCode .lisp}
(use-package <%= pkg %>
  :ensure t)
```

Or manually, after downloading into your `load-path`

``` {.sourceCode .lisp}
(require '<%= pkg %>)
```

## Use

## Related

## Acknowledgements

## License

GPL 2 (or higher) © [Free Software Foundation, Inc](http://www.fsf.org/about).
