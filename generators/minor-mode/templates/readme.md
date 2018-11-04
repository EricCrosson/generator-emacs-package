# <%= pkg %> [![Build Status](https://travis-ci.org/<%= git_username %>/<%= pkg %>.svg?branch=master)](https://travis-ci.org/<%= git_username %>/<%= pkg %>) [![Version](https://img.shields.io/github/tag/<%= git_username %>/<%= pkg %>.svg)](https://github.com/<%= git_username %>/<%= pkg %>/releases)

> <%= tagline %>

## Install

With [Quelpa](https://framagit.org/steckerhalter/quelpa)

``` {.sourceCode .lisp}
(use-package <%= pkg %>
  :quelpa (<%= pkg %>
           :fetcher github
           :repo "<%= git_username %>/<%= pkg %>")
  ;; TODO: write config, if any
  :config ())
```

From [MELPA](https://melpa.org/)

``` {.sourceCode .lisp}
(use-package <%= pkg %>
  :ensure t
  ;; TODO: write config, if any
  :config ())
```

Or manually, after downloading into your `load-path`

``` {.sourceCode .lisp}
(require '<%= pkg %>)
;; TODO: write config, if any
```

## Use

TODO

## Related

TODO

## Acknowledgements

TODO

## License

GPL 2 (or higher) © [Free Software Foundation, Inc](http://www.fsf.org/about).
