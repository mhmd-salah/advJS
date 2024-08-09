function outerFunction() {
  const outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar); 
  }

  innerFunction();
}

outerFunction();
