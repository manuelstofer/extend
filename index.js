"use strict";
var each = require('foreach'),
    slice = [].slice;

// Extend a given object with all the properties in passed-in object(s).
module.exports = function (obj) {
    each(slice.call(arguments, 1), function (source) {
        for (var prop in source) {
            obj[prop] = source[prop];
        }
    });
    return obj;
};
