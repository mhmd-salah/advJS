// producing code
let MyPromise = new Promise((res, rej) => {
  let x = 10;
  if (x === 20) {
    res(x);
  } else {
    rej(`${x} Not Equal 20`);
  }
});

// consuming code
MyPromise.then(console.log).catch(console.log);
