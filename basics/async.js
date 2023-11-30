async function print() {
    await new Promise((resolve, reject)=> {
       setTimeout(()=>{
        console.log("print");
       }, 1000);
       resolve();

    });
}

print();

console.log("end");
