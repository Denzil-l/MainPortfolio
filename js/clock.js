const hr = document.querySelector('.clock__hour')
const min = document.querySelector('.clock__minute')
const sec = document.querySelector('.clock__second')
const degre = 6
setInterval( () => {


    const date = new Date();
    const hh = date.getHours()
    const mm = date.getMinutes() 
    const ss = date.getSeconds() 

    hr.style.transform = `rotateZ(${hh * 30}deg)`;
    min.style.transform = `rotateZ(${mm * 6}deg)`;
    sec.style.transform = `rotateZ(${ss * 6}deg)`;
});

