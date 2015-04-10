var _ = require('underscore');
var object = {
  first: 1,
  second: 2,
  third: 3
};
var result1 = _.has(object, 'second');

console.log(result1); // true

var result2 = _.has(object, 'four');

console.log(result2); // false

