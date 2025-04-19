function sarthak(number1, number2)
{
    let a = number1+number2;
    return a;
}
console.log(sarthak(23 , 644));




function TwonameAdd(fname, lname){
    var a = fname + lname;
    return a;
}
console.log(TwonameAdd("sarthak " , "Gadakh"));




function Twifloatadd(f1 , f2){
    var a = (f1 + f2) + " The final answer";
    return a;
}
console.log(Twifloatadd(2.3 , 4.0));



function cynor(a , b){
    let ans = [a+b, a*b];
    return ans;
}  
console.log(cynor(3 , 5));



function calc(a, b, c){
    let total = a+b+c;
    let avg = total/3;
    return [total, avg];
}
console.log(calc(20,30,50));



function stats(arr){
    let sum = arr.reduce((acc, val) => acc + val,0);
    let avg = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [sum,avg,min,max]
}
console.log(stats([10,20,30,40]));



function great(names,ages,cname){
    let astatus = ages < 18 ? "i am minor , can't vote" : "Indian voter";
    return `hello i am ${names}. i am ${astatus}. My company Name is ${cname}`
}
console.log(great("sarthak",20,"CYNOR"));
