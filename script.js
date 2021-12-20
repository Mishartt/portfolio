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
if(animItems.length>0){
    
    window.addEventListener('scroll',animScroll)
    function animScroll(){
        for(let i = 0;i<animItems.length;i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add('active');
            // console.log('+');
        }else{
            animItem.classList.remove('active');
            // console.log('-');

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


////////////////////////ALERT/////////////////////
document.querySelector('.dw__cv').addEventListener('click',()=>{
    alert('will be soon')
})

/////////////MENU/////////////////////////////////
const menuItems = document.querySelectorAll('.header__link');
const observer = new IntersectionObserver((ent)=>{
    ent.forEach((en)=>{
        if(en.isIntersecting){
            console.log('xxx',en.target.id);
            menuItems.forEach((item)=>{
                item.style.color = 'white';
            })
            switch(en.target.id){
                case 'home':
                console.log('ok');
                menuItems[0].style.color = '#0ff'
                break;
                case 'About':
                    menuItems[1].style.color = '#0ff'
                break;
                case 'skills':
                    menuItems[1].style.color = '#0ff'
                break;
                case 'Potfolio':
                    menuItems[2].style.color = '#0ff'
                break;
                case 'Contact':
                    menuItems[3].style.color = '#0ff'
                break;
               
            }
        }
    })
})


document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);





