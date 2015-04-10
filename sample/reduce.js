var _ = require('underscore');
// 関数
var array = [1, 2, 3];
var sum = _.reduce(array, function(result, value, index) {
  result += value;
  return result;
}, 0);

console.log(sum); // 6

// オブジェクト
var object = {
  first: 1,
  second: 2,
  third: 3
};
var doubleObject = _.reduce(object, function(result, value, key) {
  result[key] = value * 2;
   return result;
}, {});

console.log(object); // {first: 1, second: 2, third: 3}
console.log(doubleObject); // {first: 2, second: 4, third: 6}
