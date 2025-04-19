//Leap Year

let amount = Number(prompt("Enter A Price"));
if(amount>0 && amount<5000){
    console.log(amount + " Sorry No Any Discount")
}
else if (amount>5000 && amount<7000){
    console.log((amount - (10*amount)/100) + " 10% Discount")
}
else if (amount>7000 && amount<9000){
    console.log((amount - (20*amount)/100) + " 20% Discount")
}
else if (amount>9000){
    console.log((amount - (50*amount)/100) + " 50% Discount")
}
else {
    console.log("Invalid Input");
}