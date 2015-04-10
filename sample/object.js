var _ = require('underscore');
// オブジェクト
var object = {
  first: 1,
  second: 2,
  third: 3
};
_.each(object, function(value, key, object) {
  console.log(value + ' : ' + key);
});
