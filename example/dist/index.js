"use strict";
exports.__esModule = true;
var hidocs_1 = require("hidocs");
console.log((0, hidocs_1.sayHello)("Thiago"));
// prints "hi Thiago"
console.log((0, hidocs_1.sayGoodbye)({ name: "John", age: 30 }));
// prints "goodbye John"
(0, hidocs_1.whatTimeIsIt)({ name: "John", age: 30 });
