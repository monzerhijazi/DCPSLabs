'use strict';
const str = require('string');
module.exports = {
    add(a, b) {
        return a + ' ' + b;
    },
    remove(a, b)  {
        return str(a).replaceAll(b, '');
    },
    everyOtherChar(a) {
        var retStr = '';
        for(var i = 0; i < a.length; i++) {
            if(i % 2 == 0) {
                retStr += a.charAt(i);
            }
        }
        return retStr;
    }
};