var uniqueRandomArray = require('unique-random-array');
var dota2Heroes = require('./dota2-heroes.json');
var getRandomItem = uniqueRandomArray(dota2Heroes);

module.exports = {
    all: dota2Heroes,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}