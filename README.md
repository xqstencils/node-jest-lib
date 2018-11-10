# Node Jest lib stencil
This is a stencil for common package base on node and jest.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@xq-stencil/node-jest-lib.svg)](https://npmjs.org/package/@xq-stencil/node-jest-lib)
[![NPM Downloads](https://img.shields.io/npm/dm/@xq-stencil/node-jest-lib.svg)](https://npmjs.org/package/@xq-stencil/node-jest-lib)
[![Build Status](https://circleci.com/gh/xqstencils/node-jest-lib.svg?style=svg)](https://circleci.com/gh/xqstencils/node-jest-lib)

[![NPM](https://nodei.co/npm/@xq-stencil/node-jest-lib.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@xq-stencil/node-jest-lib/)

## Features:

* Support Publish your package to git & npm with ci.
* Support CircleCi for pipeline.
* Support ES7 & ES6 syntax.
* Support ESlint to check the code.
* Support Jest to test your code.
* Support Yarn audit to do security check for dependencies.

## Development:

### Setup

Clone this stencil and replace `@xq-stencil/node-jest-lib` with your package name.

```
$ git clone git@github.com:xqstencils/node-jest-lib.git
```

### Install dependencies

```
$ yarn install
```

### Compile code

```
$ yarn babel
# or run babel in watch mode
$ yarn babel:watch
```

### Generate distribution code

```
$ yarn build
```

### Linting

```
$ yarn lint
```

### Testing

```
$ yarn test
# or run the test in watch mode
$ yarn test:watch
```

### Security check

```
$ yarn audit
```

### Setup CI

* Update the circleci config
* Setup the ci into circleci site.


### Publish your package

```
$ yarn release
```

## License

node-jest-lib is released under the [MIT license](https://github.com/xqstencils/node-jest-lib/blob/master/LICENSE).
