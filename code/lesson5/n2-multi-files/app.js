const username = require("./getUsername");
const user = require("./user");

console.log(`Hello ${username}!`);

console.log(user.name);
console.log(user.age);
console.log(user.city);
user.test("booo");