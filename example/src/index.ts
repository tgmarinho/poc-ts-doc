import { sayGoodbye, sayHello, whatTimeIsIt } from "hidocs";

console.log(sayHello("Thiago"));
// prints "hi Thiago"
console.log(sayGoodbye({ name: "John", age: 30 }));
// prints "goodbye John"

whatTimeIsIt({ name: "John", age: 30 });
