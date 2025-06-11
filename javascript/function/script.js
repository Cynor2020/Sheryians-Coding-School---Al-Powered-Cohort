let a = "Sarthak"
console.log(a.includes("sar"));

console.log(abc())
function abc(){
    return "Ok"
}



var aa = 12; console.log(aa)


const name = function(){
    console.log("Om Sai Ram")
}

name();

name = function(){
    console.log("ok")
}



function dada(){
    let me = 0;
    return function kaka(){
        me++;
        console.log(me);
    };
};

const bb = dada();
bb();
bb();

