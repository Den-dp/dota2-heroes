import uniqueRandomArray from 'unique-random-array';
import DOTA2_HEROES from './dota2-heroes.json';
var getRandomItem = uniqueRandomArray(DOTA2_HEROES);

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

export {DOTA2_HEROES as default, DOTA2_HEROES as all, random};