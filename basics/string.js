// do not create String object
let x = "Alice";
let y = new String("Alice");
let z = new String("Alice");

console.log("do not create String object");

console.log(x == y);
console.log(x === y);

console.log("");

console.log(y == z);
console.log(y === z);
