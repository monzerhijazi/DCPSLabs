'use strict';
var comp = {};
comp.add = function(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('paramaters need to be integers.')
    }
    return a + b;
};

comp.subtract = function(a, b)  {
    console.log(a);
    console.log(b);
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('paramaters need to be integers.')
    }
    return a - b;
};

comp.multiply = function(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('paramaters need to be integers.')
    }
    if(a === 0 || b === 0) {
        return 0;
    }
    return a * b;
};

comp.divide = function(a, b) {
    if(b === 0) {
        throw new Error('Cannot divide by 0')
    }

    if(isNaN(a) || isNaN(b)) {
        throw new Error('A number is required!');
    }

    return a / b;
};

comp.aggregate = function(arr) {
    if(!arr instanceof Array) {
        throw new Error('Expected an array!');
    }

    for(var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if(typeof item !== 'number') {
            throw new Error('All items should be numbers.');
        }
    }
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
};

comp.runCommand = function(cmd, arr) {
    switch(cmd) {
        case 'add':
            return comp.add.apply(null, arr);
        case 'subtract':
            return comp.subtract.apply(null, arr);
        case 'multiply':
            return comp.multiply.apply(null, arr);
        case 'divide':
            return comp.divide.apply(null, arr);
    }
}

module.exports = comp;