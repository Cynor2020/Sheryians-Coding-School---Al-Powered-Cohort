function name() {
    console.log("Hi Hello")
}

name();

function abc(){
    var a = 10;
    return function() {
        console.log(a)
    }
}

abc() ();