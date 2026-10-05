// Pure/impure Arrow IIFE Higher order Callback
//impure function
let k=1;
function welcome(){
    k=13;
    console.log("Welcome to the classroom!");
 }
 welcome();
 welcome();
 console.log(k);
//pure function
//function welcome(){
    //let k=1;
    //k=13;
    //console.log("Welcome to the classroom!");}
 //welcome();
 //welcome();
 //console.log(k);
 let welcome1=()=>{
    console.log("Arrow Function");
 }
 welcome1();
 //Anonymous 
 (()=>{
    console.log("IIFE Function");
 })();
 function high(a){
    a();
 }
 function low(){
    console.log("Low function");
 }
 high(low);