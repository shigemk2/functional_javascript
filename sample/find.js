var _ = require('underscore');
var array = [1, 2, 3, 4, 5];
var result = _.find(array, function(number) {
  return number % 2 === 0;
});

console.log(result); // 2
