import uniqueRandomArray from 'unique-random-array';
import dota2Heroes from './dota2-heroes.json';
var getRandomItem = uniqueRandomArray(dota2Heroes);

const all = dota2Heroes;

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

export {all as default, all, random};