const sumAction = (arr) => {
    let sum = 0;
    arr.forEach((item, index) => {
         sum += item
   })
   return sum
}
console.log("Total: ",sumAction([1, 4, 10, 13, 18]))