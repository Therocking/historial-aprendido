// Secuencia de fibonacci con array
const iterances = process.env.iterance ||  20
const arr = [0, 1]

for(let i = 1; i < iterances; i++) {
 const sum = arr[i - 1] + arr[i]
 arr.push(sum)
}

console.log(arr)
