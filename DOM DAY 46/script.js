var arr = ['sai' , 'kaka' , 'mama']

arr.forEach(function(namee , indexx){
    console.log(namee , indexx)
})


var arr2 = [
    {
        user : 'sarthak gadakh',
        ages : '20'
    },{
        user : 'sarthak gadakh',
        ages : '20'
    }

]
console.log(arr2[1].user)




var arr3 = [
    {
        user : 'sarthak gadakh',
        ages : 20
    },{
        user : 'sarthak gadakh',
        ages : 20
    }
    ,{
        user : 'sarthak gadakh',
        ages : 20
    }

]
var sto = 0
arr3.forEach(function(nameee){
    sto = sto + nameee.ages
})
console.log(sto)






var data = ''

var users = [
    {
      name: "Aarav Mehta",
      age: 25,
      skill: "JavaScript",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Priya Sharma",
      age: 28,
      skill: "Python",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
      name: "Rohan Verma",
      age: 22,
      skill: "React",
      image: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      name: "Sneha Kapoor",
      age: 30,
      skill: "Node.js",
      image: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      name: "Karan Malhotra",
      age: 26,
      skill: "PHP",
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name: "Anjali Desai",
      age: 24,
      skill: "UI/UX Design",
      image: "https://randomuser.me/api/portraits/women/61.jpg"
    },
    {
      name: "Manav Joshi",
      age: 27,
      skill: "Java",
      image: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      name: "Ishita Gupta",
      age: 23,
      skill: "MongoDB",
      image: "https://randomuser.me/api/portraits/women/81.jpg"
    },
    {
      name: "Devansh Patel",
      age: 29,
      skill: "AWS",
      image: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
      name: "Neha Reddy",
      age: 21,
      skill: "HTML & CSS",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ];

  users.forEach(function(elem){
    data = data + `<div class="card">
        <img src="${elem.image}" alt="" srcset="">
        <h1>${elem.name}</h1>
        <h3>${elem.age}</h3>
        <h3>${elem.skill}</h3>
    </div>`
  })

  var load = document.querySelector('body')
  load.innerHTML = data;
  