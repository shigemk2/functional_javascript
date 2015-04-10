var _ = require('underscore');
var person = {
  name: 'Haru39',
  say: function(age) {
    console.log(this.name + 'は' + age);
  }
};

person.say('26歳'); // Haru39は26歳

var say = person.say;
say(); // undefinedはundefined

say = _.bind(say, person);
say('26歳'); // Haru39は26歳

say = _.bind(say, person, '26歳');
say(); // Haru39は26歳
