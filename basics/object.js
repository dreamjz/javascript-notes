// access properties
const person = {
    name: "Alice",
    age: 16
};

console.log(person.name);
console.log(person["age"]);

// object method
const person2 = {
    name: "Alice",
    age: 16,
    info: function() {
        return this.name + ", " + this.age;
    }
};

console.log(person2.info()); 