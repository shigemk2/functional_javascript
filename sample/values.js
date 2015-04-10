var _ = require('underscore');
var object = {
  first: 1,
  second: 2,
  third: 3
};
var values = _.values(object);

console.log(values); // [1, 2, 3]
