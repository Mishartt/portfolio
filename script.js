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




//animation


const animItems = document.querySelectorAll('.anim-items');
console.log(animItems.length);
if(animItems.length>0){
    window.addEventListener('scroll',animScroll)
    function animScroll(){
        for(let i = 0;i<animItems.length;i++){
            const animItem = animItems[i];
            const animItemHiegh = animItem.offsetHieght;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHiegh / animStart
        }

        if(animItemHiegh > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        if((pageYOffset > animItemOffset - animItemPoint)&& pageYOffset < (animItemOffset- animItemHiegh)){
            animItem.classList.add('active');
        }else{
            animItem.classList.remove('active');
        }
    }

    function offset (el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return{top:rect.top+scrollTop,left: rect.left +screenLeft}
    }
}

