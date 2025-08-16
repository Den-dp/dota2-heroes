import { describe, it } from 'node:test';
import { expect } from 'chai';
import { all, random } from 'dota2-heroes';

describe('dota2-heroes', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(item => typeof item === 'string');
            }
        });

        it('should contain `Underlord`', () => {
            expect(all).to.include('Underlord');
        });

        it('should contain `Dark Willow`', () => {
            expect(all).to.include('Dark Willow');
        });

        it('should contain `Pangolier`', () => {
            expect(all).to.include('Pangolier');
        });

        it('should contain `Grimstroke`', () => {
            expect(all).to.include('Grimstroke');
        });

        it('should contain `Mars`', () => {
            expect(all).to.include('Mars');
        });

        it('should contain `Snapfire`', () => {
            expect(all).to.include('Snapfire');
        });

        it('should contain `Void Spirit`', () => {
            expect(all).to.include('Void Spirit');
        });

        it('should contain `Hoodwink`', () => {
            expect(all).to.include('Hoodwink');
        });

        it('should contain `Dawnbreaker`', () => {
            expect(all).to.include('Dawnbreaker');
        });

        it('should contain `Marci`', () => {
            expect(all).to.include('Marci');
        });

        it('should contain `Primal Beast`', () => {
            expect(all).to.include('Primal Beast');
        });

        it('should contain `Muerta`', () => {
            expect(all).to.include('Muerta');
        });

        it('should contain `Ringmaster`', () => {
            expect(all).to.include('Ringmaster');
        });

        it('should contain 125 heroes', () => {
            expect(all).to.have.length(125);
        });
    });

    describe('random', () => {
        it('should return a random hero', () => {
            const randomItem = random();
            expect(all).to.include(randomItem);
        });

        it('should return an array of random heroes if passed a number', () => {
            const randomItems = random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(item => expect(all).to.include(item));
        });
    });
});
