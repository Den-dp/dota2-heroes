# dota2-heroes 

> Get a random Dota 2 hero name.

[![NPM][dota2-heroes-icon]][dota2-heroes-url]

[![Build Status][dota2-heroes-ci-image]][dota2-heroes-ci-url]
[![Coverage Status][dota2-heroes-coverage-image]][dota2-heroes-coverage-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]
[![semantic-release][semantic-image]][semantic-url]
[![dependencies][dota2-heroes-dependencies-image]][dota2-heroes-dependencies-url]
[![devdependencies][dota2-heroes-devdependencies-image]][dota2-heroes-devdependencies-url]

## Last added hero
![uv6ibytldn8](https://user-images.githubusercontent.com/1770529/33741747-3e36ad88-dbae-11e7-8ed9-52971792889f.png)

## Installation

This package is distributed via npm:

```
npm install dota2-heroes
```

## Usage

```javascript
var names = require('dota2-heroes');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

## Contributing
[conventional-changelog](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md)

[dota2-heroes-icon]: https://nodei.co/npm/dota2-heroes.svg?downloads=true
[dota2-heroes-url]: https://npmjs.org/package/dota2-heroes
[dota2-heroes-ci-image]: https://img.shields.io/travis/Den-dp/dota2-heroes.svg?style=flat-square
[dota2-heroes-ci-url]: https://travis-ci.org/Den-dp/dota2-heroes
[dota2-heroes-coverage-image]: https://img.shields.io/codecov/c/github/Den-dp/dota2-heroes.svg?style=flat-square
[dota2-heroes-coverage-url]: https://codecov.io/github/Den-dp/dota2-heroes
[dota2-heroes-dependencies-image]: https://img.shields.io/david/den-dp/dota2-heroes.svg?style=flat-square
[dota2-heroes-dependencies-url]: https://david-dm.org/den-dp/dota2-heroes
[dota2-heroes-devdependencies-image]: https://img.shields.io/david/dev/den-dp/dota2-heroes.svg?style=flat-square
[dota2-heroes-devdependencies-url]: https://david-dm.org/den-dp/dota2-heroes#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen-url]: http://commitizen.github.io/cz-cli/
