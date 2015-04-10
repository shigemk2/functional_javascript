var _ = require('underscore');
var object = {
  first: 1,
  second: 2,
  third: 3
};
var keys = _.keys(object);

console.log(keys); // ["first", "second", "third"]
