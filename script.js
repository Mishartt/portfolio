const item = document.querySelectorAll('.item1');

console.log(item);
item[0].addEventListener('click',()=>{
    window.open('http://mishart.site/projects/weather/index.html');
})

item[1].addEventListener('click',()=>{
    window.open('http://mishart.site/projects/timer/index.html');
})

item[2].addEventListener('click',()=>{
    window.open('http://mishart.site/projects/todo2/index.html');
})