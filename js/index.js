'use strict';

/*
"test"

"tset"
*/

/*const str = "Word";

const result = str.split('').reverse().join('');

console.log(result);*/

const userStr = prompt("Insert your Str:");

function checkPalindrome(str) {

    str = str.replace(/[^а-яa-z]/ig,"");

    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

}

alert(checkPalindrome(userStr));фв