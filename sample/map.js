var _ = require('underscore');

// 配列
var array = [5, 10, 15];
var doubleArray = _.map(array, function(element, index, array) {
  return element * 2;
});

console.log(array); // [5, 10, 15]
console.log(doubleArray); // [10, 20, 30]

// オブジェクト
var object = {
  first: 1,
  second: 2,
  third: 3
};
var doubleArray = _.map(object, function(value, key, object) {
  return value * 2;
});
console.log(object); // {first: 1, second: 2, third: 3}
console.log(doubleArray); // [2, 4, 6]
