// create set
const letters = new Set(['a', 'b', 'c']);
// add element
letters.add('d');
// forEach()
letters.forEach(function (ele) {
    console.log(ele);
});

for (const e of letters) {
    console.log(e);
}