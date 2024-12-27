const log = console.log;

function formatAsCurrency(value, local, currencyCode) {
  return Intl.NumberFormat(local, {
    style: "currency",
    currency: currencyCode,
  }).format(value);
}
// log(formatAsCurrency(2340.2, "ar-EG", "EGP"));   // ٢٬٣٤٠٫٢٠ ج.م.
// log(formatAsCurrency(100.12, "en-US", "USD"));   // $100.12
// log(formatAsCurrency(33300.23, "de-DE", "EUR")); // 33.300,23 €

const obj = {
  userName: "mohamed",
  age: 21,
  getAge() {
    return this.age;
  },
};

Reflect.get(obj, "userName"); // "mohamed"
Reflect.get(obj, "age"); // 21
Reflect.get(obj, "getAge")(); // 21

Reflect.set(obj, "subName", "ahmed");
console.log(obj.subName);

const validator = {
  set: function (target, property, value) {
    if (property === "age" && (typeof value !== "number" || value < 0)) {
      throw new Error("Invalid age");
    }
    target[property] = value;
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 25; // صحيح
console.log(person.age); // 25

person.age = -5; // سيؤدي إلى خطأ


const logger = {
  get: function(target, property) {
    console.log(`Accessing property: ${property}`);
    return target[property];
  },
  set: function(target, property, value) {
    console.log(`Setting property: ${property} to ${value}`);
    target[property] = value;
    return true;
  }
};

const data = new Proxy({}, logger);

data.name = 'Alice';  // يسجل العملية
console.log(data.name);  // يسجل العملية


const data = new Proxy({}, {
  get: function(target, property) {
    console.log(`Accessing property: ${property}`);
    return target[property];
  },
  set: function(target, property, value) {
    console.log(`Setting property: ${property} to ${value}`);
    target[property] = value;
    return true;
  }
});

data.name = 'Alice';  // يسجل العملية
console.log(data.name);  // يسجل العملية