import uniqueRandomArray from 'unique-random-array';
import DOTA2_HEROES from './dota2-heroes.json';

const getRandomItem = uniqueRandomArray(DOTA2_HEROES);

export function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        let randomItems = [];
        for (let i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}

export { DOTA2_HEROES as all };
