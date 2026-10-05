//variables & Datatypes
//primitive-stores single value
//non-primitive-stores multiple values
//let var const
a=10;
b="Dharun";
c=true;
d=null;
var a;
console.log(a);
{
    var k=10.5;
}
console.log(k);
a="Mirnali";
console.log(a);
//Non-primitive array
let arr=[1,2,3,4,5];
console.log(arr[2]);
console.log(arr[5]);
let arr1=["a","b","c","d"];
console.log(arr1[2]);
console.log(arr1[3]);
let r=arr;
r[2]=13;
console.log(arr[2]);
let s=structuredClone(arr);
s[2]=15;
console.log(arr[2]);
//Objects
let n={name:"Nalinkumar",gender:"male"};
console.log(n["name"]);
console.log(n);
console.log(Object.keys(n));
console.log(Object.values(n));
// Unary ++ --
let q=12;
q++;//post increment
console.log(q);
let p=14;
let z=p++;
let y=++p;
console.log(z);
console.log(y);
let t=q++ + q++ + ++q + ++q + q;
console.log(t);
let w=q-- - q-- - --q - --q - q;
console.log(w);
//Binary 
//Arithmetic Relational Logical Assignment

//+ - * / %
let a1=5;
let a2=5;
console.log(a1+a2);
console.log(a1-a2);
console.log(a1*a2);
console.log(a1/a2);
console.log(a1%a2);
console.log("13"+1);
console.log("13d"-1);
console.log(true+true);
console.log(true+false);
console.log(true-false);
console.log(true*true);
console.log(true/true);
console.log(true%false);
console.log(false%true);
console.log(false+null);
console.log(true+null);

// > < >= <= == !=
console.log(1>"2");
console.log("2">"112");
console.log("2"<"112");
console.log(true==1);
console.log(false==0);
console.log(null==undefined);
console.log([8,4]>[7]);
console.log("m">"d");

//Bitwise
console.log(5&3);
console.log(5|3);
console.log(5^3);
console.log(~5);

//Logical
console.log(true&&false);
console.log(true||false);
console.log(!true);
console.log(!false);
console.log(1 && 13);
console.log(14 || 13);
