import {expect} from 'chai';
import * as dota2Heroes from './index';

describe('dota2-heroes', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(dota2Heroes.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Pudge`', () => {
            expect(dota2Heroes.all).to.include('Pudge');
        });
    });

    describe('random', () => {
        it('should return a random item from the dota2Heroes.all', () => {
            var randomItem = dota2Heroes.random();
            expect(dota2Heroes.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', () => {
            var randomItems = dota2Heroes.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
                expect(dota2Heroes.all).to.include(item);
            });
        });
    });
});
