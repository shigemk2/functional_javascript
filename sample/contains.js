var _ = require('underscore');
var array = [1, 2, 3, 4, 5];

var result1 = _.contains(array, 2);
console.log(result1); // true

var result2 = _.contains(array, 10);
console.log(result2); // false
