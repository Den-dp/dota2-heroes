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
![Muerta](https://private-user-images.githubusercontent.com/1770529/346283434-1ec7d13c-fccc-4a67-9266-c90eba166ff0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAyODA0NjQsIm5iZiI6MTcyMDI4MDE2NCwicGF0aCI6Ii8xNzcwNTI5LzM0NjI4MzQzNC0xZWM3ZDEzYy1mY2NjLTRhNjctOTI2Ni1jOTBlYmExNjZmZjAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDcwNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA3MDZUMTUzNjA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTc3OTA0NGQxN2M2Nzg3NmE4MmU1NGE2MDhiNTQ0ZDQ5NTdiM2Y1YzhjOGRjYjJkMjY2ZjNjYzBhMGZhNTYyZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ._TRt_SmdMmqdhdZb0Y0Qu5xyhj3xBKCn5qOV6clDTCs)

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
[How to contribute](https://github.com/Den-dp/dota2-heroes/blob/master/CONTRIBUTING.md)

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
