var _ = require('underscore');
// 配列
var array = [5, 10, 15];
_.each(array, function(element, index, array) {
  console.log(element + ' : ' + index);
});

// オブジェクト
var object = {
  first: 1,
  second: 2,
  third: 3
};
_.each(object, function(value, key, object) {
  console.log(value + ' : ' + key);
});
