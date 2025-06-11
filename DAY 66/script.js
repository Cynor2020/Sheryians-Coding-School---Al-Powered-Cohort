function getuser(){
    return new Promise((res, rej) => {
        res({id:1 , name:"sarthak", age:20})
    })
}

getuser().then(function(data){
 console.log(`data featched: ${data.name}`)
})










let meraPromise = new Promise(function(resolve, reject) {
    let kaamHoGaya = true;

    if (kaamHoGaya == true) {
        resolve("Kaam ho gaya bhai!");
    } else {
        reject("Kaam nahi hua bhai 😢");
    }
});



meraPromise
    .then(resolve => console.log("Success: " + resolve))
    .catch(reject => console.log("Error: " + reject))

    meraPromise
    .then(function(resolve) {
        console.log("Success: " + resolve);  // agar promise resolve hua
    })
    .catch(function(reject) {
        console.log("Error: " + reject);     // agar promise reject hua
    });

