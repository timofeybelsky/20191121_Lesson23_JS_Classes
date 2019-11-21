'use strict';

function counterCreator() {

    let count = 0;

    return {

        increment() {
            return ++count;
        },

        decrement() {
            return --count;
        },
    }
}

const counter1 = counterCreator();

const counter2 = counterCreator();