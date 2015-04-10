var _ = require('underscore');
var array = [
  {name: 'Haru39', age: 26},
  {name: 'yutapon', age: 18},
  {name: 'slime', age: 15}
];
var result1 = _.pluck(array, 'name');

console.log(result1); // ["Haru39", "yutapon", "slime"]

var result2 = _.pluck(array, 'age');

console.log(result2); // [ 26, 18, 15 ]
