
function Factorial(n: number): number {
  let result = 1

  for(let index = n; index > 0; index--) {
    result *= index
  }

  return result
}
const nFact = 2
const factorial = Factorial(nFact)
console.log(factorial)
