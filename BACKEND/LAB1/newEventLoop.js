console.log("This is a starting point of my code");

process.nextTick(()=>{
console.log("This is process.nexTick code");
},2000);
console.log("This is the end point of my code");

setTimeout(()=>{
    console.log("This is first timeout function ");
},5000);
console.log("This is the end point of my code");