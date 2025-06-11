// var a = [1,1,1,2,2,2,33,3,3,3,32,2,4,4,,4,4]
// var ans = [...new Set(a)];
// console.log(ans)


var arr = [1,2,3,4,5,6,7];
var ans = arr.sort(function(a,b){
    return b-a;
});

console.log(ans);


var bbb = [65,22,22,2,2,3,3,3,444,444,444,4,5,5,9];
console.log([...new Set(bbb)].sort(function(a,b){
    return b-a;
}))



var tata = [11,12,13,14,15];
var tata2 = [];
for(var a = tata.length-1; a>=0; a--){
    tata2.push(tata[a]);
}

console.log(tata2)