var expect = require('chai').expect;
var dota2Heroes = require('./index');

describe('dota2-heroes', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(dota2Heroes.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Pudge`', function () {
            expect(dota2Heroes.all).to.include('Pudge');
        });
    });

    describe('random', function () {
        it('should return a random item from the dota2Heroes.all', function () {
            var randomItem = dota2Heroes.random();
            expect(dota2Heroes.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', function () {
            var randomItems = dota2Heroes.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
                expect(dota2Heroes.all).to.include(item);
            });
        });
    });
});