var lokesh = document.querySelector('h1')
// lokesh.innerHTML = 'Nice'

var btn = document.querySelector('button')
// var cc = document.querySelector('#box')
// function changeBox(){
//     cc.style.backgroundColor = 'pink'
// }


var check = 0

btn.addEventListener('click',function(){
    if (check == 0) {
        btn.innerHTML = 'Add Friend'
        
        lokesh.innerHTML = 'Sarthak Not Your Friend'
        btn.style.backgroundColor = 'green'
        check = 1
    }else{
        btn.innerHTML = 'Cancle Friend'
        lokesh.innerHTML = 'Sarthak Is Your Friend'
        btn.style.backgroundColor = 'Red'
        check = 0
    }
    
})


