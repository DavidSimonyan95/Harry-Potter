let input = document.querySelector('input'); 
let root = document.getElementById('root');
let play = document.querySelector('#play');
let stop = document.querySelector('#stop');
const music = new Audio('music.mp3');
play.addEventListener("click",function(){
    music.play()
})
stop.addEventListener("click",function(){
   music.pause()
})
let arrName = [];
fetch('http://hp-api.herokuapp.com/api/characters')
.then((response)=>response.json())
.then((response)=>response.map(val=>arrName.push(val.name)));

input.addEventListener('keyup',(e)=>{
    searchText = e.target.value;
    searchText?root.style.display = 'block':root.style.display = 'none';
    foo()
});

function foo(){
    root.innerHTML = '';
    arrName.filter(name=>name.toLowerCase().indexOf(searchText.toLowerCase()) === 0).map(name =>{
        const div = document.createElement('div');
        div.innerText = name;
        return root.appendChild(div)
    })
};

