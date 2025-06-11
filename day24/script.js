// bosadike he callback function he

function abc(val){
    val();
}

abc(function(){
    console.log("Lavada Lasun")
}); //mene function bheja val me is ham cll back function kehte he

function loka(){
    return function(){}
}
loka();     //ise ham HOF Function bolate he


//ab closer kya hota he

function abc(){
    let a = 10;
    return function(){
        console.log(a)
    }
}
abc();



//function using timing
function kaka(fn){
    setTimeout(fn, 5000);

}
kaka(function(){
    console.log("Hey Sarthak")
})



function sarthak(){
    let a = 0;
    return function(){
        a++;
        console.log(a);
    }
}
let b = sarthak();
b();
b();
b();
