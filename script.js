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
            console.log(animItem);
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add('active');
            console.log('+');
        }else{
            animItem.classList.remove('active');
            console.log('-');

        }
       
      }
    }   

    function offset (el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset  ||  document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return{top:rect.top+scrollTop,left: rect.left + scrollLeft}
    }

    
    setTimeout(()=>{
        animScroll()
    },300)
    
    
}

