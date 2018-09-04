import {expect} from 'chai';
import * as dota2Heroes from './index';

describe('dota2-heroes', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(dota2Heroes.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(item => typeof item === 'string');
            }
        });

        it('should contain `Underlord`', () => {
            expect(dota2Heroes.all).to.include('Underlord');
        });

        it('should contain `Dark Willow`', () => {
            expect(dota2Heroes.all).to.include('Dark Willow');
        });

        it('should contain `Pangolier`', () => {
            expect(dota2Heroes.all).to.include('Pangolier');
        });

        it('should contain `Grimstroke`', () => {
            expect(dota2Heroes.all).to.include('Grimstroke');
        });
    });

    describe('random', () => {
        it('should return a random item from the dota2Heroes.all', () => {
            const randomItem = dota2Heroes.random();
            expect(dota2Heroes.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', () => {
            const randomItems = dota2Heroes.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(item => expect(dota2Heroes.all).to.include(item));
        });
    });
});
