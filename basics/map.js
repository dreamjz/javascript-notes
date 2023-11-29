// create map
const m = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);
// set
m.set("d", 4);
// get
console.log(m.get("b")); // 2

for (const e of m) {
    console.log(e);
}