var _ = require('underscore');
var array = [1, 2, 3, 4, 1, 2];
var result = _.uniq(array);

console.log(result); // [1, 2, 3, 4]
