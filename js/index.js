'use strict';

/*

1 1 2 3 5 8 13 21 34 55 89

*/


function fib(n) {

    if(n < 1 && Number.isInteger(n) && Number.isFinite(n) ) {
        return;
    }

    if(n <= 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

function fibI(n) {

    if(n < 1 && Number.isInteger(n) && Number.isFinite(n) ) {
        return;
    }

    if( n < 3 ) {
        return 1;
    }

    let fib1 = 1;
    let fib2 = 1;
    let sum = fib1 + fib2;

    for(let i = 3; i < n; i++) {

        fib1 = fib2;
        fib2 = sum;
        sum = fib1 + fib2;
    }

    return sum;
}
