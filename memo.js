// function memoizeSquare() {
//   const cache = {}; // الكاش الي بيتخزن في النتائج

//   return function (n) {
//     if (n in cache) {
//       // لو النتيجه موجوده ف الكاش
//       console.log("Returning from cache:", cache[n]);
//       console.log(cache)
//       return cache[n];
//     }

//     const result = n * n; // حساب النتيجة
//     cache[n] = result; // تخزين النتيجة في الكاش
//     console.log("Calculating and storing:", result);
//     console.log(cache);
//     return result;
//   };
// }

// const memoizedSquare = memoizeSquare();

// console.log(memoizedSquare(5)); // حساب وتخزي  25
// console.log(memoizedSquare(5)); // إرجاع من الكاش  25
// console.log(memoizedSquare(6)); // حساب وتخزين  36
// console.log(memoizedSquare(6)); // إرجاع من الكاش  36

Array.prototype.myMap= function(cp){
  let newArr=[];
  for(let i =0;i<this.length;i++){
    newArr.push(cp(this[i],i,this))
  }
  return newArr;
}

const num = [2,3,4,5,6,56]
const re = num.myMap((nu)=>nu*2)
console.log(re)