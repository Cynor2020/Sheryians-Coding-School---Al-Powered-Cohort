// let userInput;
// do{
//     console.log("Namaste India");
//     userInput = prompt("kya aap countine karana chahate ho enter yes or no")
// }
// while(userInput === 'yes');


let com = Math.floor(Math.random() * 100) + 1;
let userInput;
do{
    userInput = Number(prompt("Enter any Number 1 to 100"))
    if(isNaN) (userInput) || userInput<0 || userInput>100;
    {
        console.log("Invalid Input")
        continue
    } 
    if(userInput>com)console.log("To High Try Again");
    else if (userInput < com) console.log("To low try again");
    else console.log("Wow you are Win");

} while(userInput !== com);