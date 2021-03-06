var Cryo = require('../lib/cryo');

var obj = {
  defaultValue: undefined
};

var withJSON = JSON.parse(JSON.stringify(obj));
console.log(withJSON.hasOwnProperty('defaultValue'));   // false

var withCryo = Cryo.parse(Cryo.stringify(obj));
console.log(withCryo.hasOwnProperty('defaultValue'));   // true
