var _ = require('underscore');
// 配列
var array = [5, 10, 15];
_.each(array, function(element, index, array) {
  console.log(element + ' : ' + index);
});
