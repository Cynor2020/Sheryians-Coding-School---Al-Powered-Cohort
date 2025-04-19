var btn = document.querySelector('button')
btn.innerText = "Sarthak";




btn.addEventListener('click' ,function(){

    var img = document.createElement('img')
    img.setAttribute('src', 'https://images.unsplash.com/photo-1743052864032-2363b7e67bf7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')


    var x = Math.random()*90 
    var y = Math.random()*90 
    var root = Math.random()*360
    
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = x+'%'
    img.style.top = y+'%'
    img.style.rotate = root+'deg'
    document.body.appendChild(img)
})