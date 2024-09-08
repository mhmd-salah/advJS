// function outerFunction() {
//   const outerVar = "I'm outside!";

//   function innerFunction() {
//     console.log(outerVar); 
//   }

//   innerFunction();
// }

// outerFunction();

let myPromise = new Promise((res,rej)=>{
  res()
  rej()
})

myPromise.then(
  (value)=>console.log("resolve"),
  (rej)=>console.log(rej)
)

// Fetch data from API 1
fetch('https://api1.example.com/data')
  .then(response => response.json())
  .then(data1 => {
    // Process data from API 1
    console.log('Data from API 1:', data1);

    // Fetch data from API 2
    return fetch('https://api2.example.com/data');
  })
  .then(response => response.json())
  .then(data2 => {
    // Process data from API 2
    console.log('Data from API 2:', data2);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });


  let name = "maohemd"
  console.log(name)
  

    .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
