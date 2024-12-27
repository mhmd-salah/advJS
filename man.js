
const obj = {
  name : "mohamed",
  age: 21,
  getAge() {
    return this.age;
  },
}

const proxy = new Proxy(obj, {
  get(target, prop) {
    return target[prop];
  }
});


console.log(proxy.name);


proxy.name = "ahmed";

const prox = new Proxy(obj, {
  get(target, prop) {
    return target[prop];
  }
});
console.log(prox.name);

// 
// it's self-invoking function


let btn = document.querySelector("button")
console.log(btn)