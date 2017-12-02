'use strict';
function bottles_of_beer(bottles) {
    let text=[];

        if (bottles > 1)
        {
            for(let i=bottles;i>1;i--)
            {
                text.push(i + ' ' + 'bottles of beer on the wall, ' + i + ' ' + 'bottles of beer.\n' +
                    'Take one down and pass it around, ' + (i - 1) + ' ' + 'bottles of beer on the wall.');
            }
            text.push('1 bottle of beer on the wall, 1 bottle of beer.\n'+
                'Take one down and pass it around, no more bottles of beer on the wall');
            text.push('No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.');
            return text.toString();
        } else if (bottles == 1)
        {
            text.push('1 bottle of beer on the wall, 1 bottle of beer.\n'+
                'Take one down and pass it around, no more bottles of beer on the wall');
            text.push('No more bottles of beer on the wall, no more bottles of beer.\n,'+
                'Go to the store and buy some more, 99 bottles of beer on the wall.');
            return text.toString();
        }
        else if (bottles == 0)
        {
            text.push('No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.');
            return text.toString();
        }

}


 module.exports =bottles_of_beer;