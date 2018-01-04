let context = require('./index');
let data = require('./__tests__/samessage');
let result = context.map(data);
console.dir(result);
module.exports = result;
