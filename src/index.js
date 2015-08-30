var uniqueRandomArray = require('unique-random-array');
var dota2Heroes = require('./dota2-heroes.json');

module.exports = {
    all: dota2Heroes,
    random: uniqueRandomArray(dota2Heroes)
};