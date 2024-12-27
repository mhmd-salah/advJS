// const calc = (age) => (name) => {
//   console.log(`${name} is ${age} years old`);
// };

// const log = calc(21);
// log("mohamed");
// log("mohamed");
// log("mohamed");

// if (true) console.log("true");
// else console.log("false");
// const obj = {
//   name: "mohamed",
//   age: 21,
//   getAge() {
//     return this.age;
//   },
// };
// const proxy = new Proxy(obj, {
//   get(target, prop) {
//     return target[prop];
//   },
// });

//----------------------------
const path = String.raw`C:\Users\mhmd-salah`;
console.log(path);
//----------------------------

//---------------------------- optional chaining ?. with 
const user = {
  name: "mohamed",
  syHi: () => `hi ${this.name}`,
};
console.log(user.syWlc?.()); // undefined (no error)
//----------------------------

//---------------------------- intl.listFormat
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(["mohamed", "ahmed", "ali"]));
//----------------------------

//---------------------------- flatMap
const nestedArr = [[1], [2, 3], [4]];
// const withFlat = nestArr.flat(Infinity);
// const withFlatMap = nestedArr.flatMap((x) => x.map((n) => n * 2));
// const withMap = nestedArr.map(x=>x.map(n=>n*2)).flat()
// console.log(withFlatMap, withFlat, withMap);
// [2, 4, 6, 8];
//----------------------------
//----------------------------
//----------------------------  
//----------------------------
//----------------------------
//----------------------------
//----------------------------
//----------------------------


function test(){
  let name = "mohamed"
}

console.log(name); //ReferenceError: name is not defined
