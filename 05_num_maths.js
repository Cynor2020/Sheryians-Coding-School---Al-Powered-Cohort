const a = 400
console.log(a)  //auto defined types = number

const b = new Number(400) //manually defined types number
console.log(b)

console.log(b.toString().length) //number convert in string

console.log(b.toFixed(1));

const price = 23.9870
console.log(price.toPrecision(3))

const red = 1000000
console.log(red.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-4)) //alwayas show positive value
console.log(Math.round(4.5))  //not decimal value. convert decimal value
console.log(Math.floor(4.9))

console.log(Math.min(2,3,6,5,7,9,1,6,7))  //show minium value
console.log(Math.max(2,3,6,5,7,9,1,6,7))  //show maxium value

console.log(Math.random())  //random number showing in 0 to 1
console.log(Math.random()*10 + 1)  //random number showing in 1 to 9

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
