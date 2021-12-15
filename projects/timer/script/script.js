const hourEl = document.querySelector('.h');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');
const mSecEl = document.querySelector('.m-sec');
const resEl = document.querySelector('.res');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const lap = document.getElementById('lap');
const clear = document.getElementById('clear');

start.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = setInterval(startTimer,10)
})

let hour = 00,
    sec = 00,
    min = 00,
    mSec = 00,
    interval;


    function startTimer(){
        mSec++
    if(mSec < 9){
        mSecEl.innerText = '0' + mSec
    }
    if(mSec > 9){
        mSecEl.innerText = mSec
    }
  
    if(mSec > 99){
       sec++
       secEl.innerText = '0' + sec
       mSec = 0
       mSecEl.innerText = '0' + mSec
    }
    ////
    if(sec < 9){
        secEl.innerHTML = '0' + sec
    }
    if(sec > 9){
        secEl.innerHTML = sec
    }
    if(sec > 60){
        min++
        minEl.innerHTML = '0' + min
        sec = 0
        secEl.innerHTML = '0' + sec
    }
    ////
    if(min < 9){
        minEl.innerHTML = '0' + min
    }

    if(min > 9){
        minEl.innerHTML = min
    }

    if(min > 60){
        hour++
        hourEl.innerHTML = '0' + hour
        min = 0
        minEl.innerHTML = '0' + min
    }
    //
    if(hour < 9){
        hourEl.innerHTML = '0' + hour
    }

    if(hour > 9){
        hourEl.innerHTML = hour
    }

    

}

pause.addEventListener('click',() => {
    clearInterval(interval)
});

stop.addEventListener('click',() => {
    clearInterval(interval)
    hour = 00;
    sec = 00;
    min = 00;
    mSec = 00;
    hourEl.innerHTML ='00'
    minEl.innerHTML = '00'
    secEl.innerHTML = '00'
    mSecEl.innerHTML = '00'
});

let res = ``;

lap.addEventListener('click',() => {
    res += `<div>
    ${hourEl.innerHTML} : ${minEl.innerHTML} : ${secEl.innerHTML} : ${mSecEl.innerHTML}
    </div>`
    resEl.innerHTML = res;
});

clear.addEventListener('click',() => {
        res = ''
        resEl.innerHTML = ''
})


const del = document.querySelector('.del');
const delH = document.getElementById('h');
const delHh = document.getElementById('hh');
const time = document.querySelectorAll('.timer__block');

let m = 0;
del.addEventListener('click',()=>{
   if(m == 0){
       delH.innerHTML = '';
       delHh.innerHTML = '';
       m++;
       time.forEach((el)=>{
        el.classList.add('withoutH')
       })
      delH.style.display = 'none'
       
       
   }else{
       m = 0;
       delH.innerHTML = `<div class="time h">00</div>
       <div class="title"></div>`;
       delHh.innerHTML = ':'
       time.forEach((el)=>{
        el.classList.remove('withoutH')
       })
       delH.style.display = 'flex'
   }
})