document.querySelector("button").addEventListener("click" , function (){
    fetch("https://api.github.com/users/Cynor2020")
.then(res => res.json())
.then((data) => {
    console.log(data)
});
})