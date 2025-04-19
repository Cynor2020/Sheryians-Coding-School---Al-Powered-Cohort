// let a = Number(prompt("Enter A Number"))

// if(isNaN(a)){
//     console.log("Invalid Input")
// }
// else{
//     for(i=1;i<=a;i++){
//         console.log("Show SMS " , + a ," Times")
//     }
// }



// let b = Number(prompt("Enter A Number"))
// if(isNaN(b)){
//     console.log("Invalid input")
// }
// else{
//     for(i=1;i<=b;i++){
//         console.log(i)
//     }
// }

let n = Number(prompt("Enter A Prime Number"))
let b = isPrimeFun(n)
if(b) console.log("Prime Number")
else console.log("Not A Prime Number")

function isPrimeFun(n){
    if(n<=1) return true;
    if(n == 2) return true;
    if(n % 2 ==0) return false;
}