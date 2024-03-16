// Secuencia de fibonacci con array
// function Fibo(iterances: number): void {
//   const arr = [0, 1]
//
//   for(let i = 1; i < iterances; i++) {
//    const sum = arr[i - 1] + arr[i]
//    arr.push(sum)
//   }
//
//   console.log(arr)
// }
//
// Fibo(20);

function FiboLoop(limit: number): void {
  let num1 = 0, num2 = 1;

  while(limit > 1) {
    let sum = num1 + num2;
    num1 = num2
    num2 = sum

    console.log(sum)
    limit -= 1
  }
}
FiboLoop(15)
