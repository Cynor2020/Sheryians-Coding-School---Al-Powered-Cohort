function getDetails(name , cb){
setTimeout(function(){
    console.log("Sending Request")
},3000)
setTimeout(function(){
    console.log("Featch Data")
},6000)
setTimeout(function(){
    cb();
},10000);
}

getDetails("Sarthak", function(){
    console.log("Data Saved In gallary")
});



function DoSome(){

}
DoSome(function(){

})







function stepone(cb){
    console.log("Step 1")
    cb();
}

function steptwo(cb){
    console.log("Step 2")
    cb();
}

function stepthree(cb){
    console.log("Step 3")
    cb();
}

function stepfore(cb){
    console.log("Step 4")
    cb();
}

stepone(()=>{
    steptwo(()=>{
        stepthree(()=>{
            stepfore(()=>{
                console.log("Nice done all")    //callback hel
            })
        })
    })
})


stepfore(()=>{
    console.log("Om Sai Ram")
})




const pr = new Promise(function(res, rej){
    console.log("Instagram Jao Data Lao");
    console.log("Instagram me data collect ho rahan he")
    console.log("data collect time error aa gaya")
    res();
});

pr.then(function(){
   console.log("Resoled")
}).catch(function(){
    console.log("Rejected")
})
