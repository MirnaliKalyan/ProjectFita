let d = [1, 2, 3, 4, 5];
let mExample=d.map((e)=>{ //e,i,o
    return e+3;
})
console.log(mExample);
let m1Example=d.map((e)=>{
    return e*2;
})
console.log(m1Example);
let m2Example=d.map((e)=>{
    return e>2;
})
console.log(m2Example);
let fExample=d.filter((e)=>{
    return e>2;
})
console.log(fExample);
let fiExample=d.find((e)=>{
    return e>2;
})
console.log(fiExample);
let fi1Example=d.findIndex((e)=>{
    return e>2;
})
console.log(fi1Example);
let rExample=d.reduce((prev,e)=>{ //prev,e,i,o
    return prev+e;
})
console.log(rExample);
