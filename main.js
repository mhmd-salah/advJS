// "use strict";
// // abort controller
// // -> EX-2:
// let controller = new AbortController();
// controller.signal.addEventListener("abort", () => console.log("abort from event listener"));
// console.log("aborted: " + controller.signal.aborted);
// setTimeout(() => {
//     controller.abort("cancel"); // abort
//     console.log(controller.signal.reason);
//     console.log("aborted: " + controller.signal.aborted);
// }, 2000);

const rtf = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
  style: "long",
});

console.log(rtf.format(-1, "day")); // yesterday
console.log(rtf.format(0, "day")); // today
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days

// --------------
// Create a global property with `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // this `x` refers to global `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20

// --------------

const logName = new Function("name", "console.log(name)");
logName("John"); // logs "John"

const logName2 = (name) => console.log(name);
logName2("John"); // logs "John"
// --------------


const user = {
    name: "John",
    age: 30,
    getAge() {
        return this.age;
    }
};

Reflect.defineProperty(user, "name", {
    writable: false
});


const proxy = new Proxy(user, {
    get(target, prop) {
        return target[prop];
    }
});