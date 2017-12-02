'use strict';
const bottles_of_beer = require('../main/main.js');
describe("99_bottles",function () {
    it("when the quantity of beer is bigger than 1",function () {
            const result=bottles_of_beer(3);
            const expect_String='3 bottles of beer on the wall, 3 bottles of beer.\n'+'Take one down and pass it around, 2 bottles of beer on the wall.,'+
                '2 bottles of beer on the wall, 2 bottles of beer.\n'+'Take one down and pass it around, 1 bottles of beer on the wall.,'+
                '1 bottle of beer on the wall, 1 bottle of beer.\n'+ 'Take one down and pass it around, no more bottles of beer on the wall,'+
                'No more bottles of beer on the wall, no more bottles of beer.\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(result).toEqual(expect_String);

    });
    it("when the quantity of beer is equal to 1",function () {
        const text=bottles_of_beer(1);
        const expect_String='1 bottle of beer on the wall, 1 bottle of beer.\n'+ 'Take one down and pass it around, no more bottles of beer on the wall,'+
            'No more bottles of beer on the wall, no more bottles of beer.\n' + ',Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(text).toEqual(expect_String);

    });
    it("when the quantity of beer is equal to 0",function () {
        const text=bottles_of_beer(0);
        const expect_String='No more bottles of beer on the wall, no more bottles of beer.\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(text).toEqual(expect_String);

    });
});