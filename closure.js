function outer() {
  let num = 1; 


  return function inner() {
    console.log(num);
  };
}

const innerFunc = outer(); 
innerFunc(); // 1


