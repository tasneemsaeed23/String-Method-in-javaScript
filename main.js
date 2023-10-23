
// -----------string 1-------------
let theName = "tasneem";
console.log(theName);
console.log(theName[1]);
console.log(theName.charAt(0));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.charAt(3).toUpperCase());
// --------string 2 -------------
let a = "tasneem said mousa";
console.log(a.indexOf("said"));
console.log(a.indexOf("said"));
console.log(a.indexOf("m"));
console.log(a.lastIndexOf("a"));
console.log(a.slice(2,6));
console.log(a.substring(2,6));
console.log(a.repeat(2));
console.log(a.split(" "));
//---------string 3----------
let b = "tasneem said mousa";
console.log(a.length);
console.log(a.substring(3));
console.log(b.substr(2,6));
console.log(b.includes("mousa"));
console.log(b.startsWith("e"));
console.log(b.startsWith("said", 8));
console.log(b.endsWith(a));
//-------challenge---------
let c = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(c.slice(2,6)); // Zero

// 8 H
console.log(c.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log([c.slice(0, 6)]); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${c.substr(0, 6)} ${c.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(c.charAt(0).toLowerCase() + c.slice(1).toUpperCase()); // eLZERO WEB SCHOOl



