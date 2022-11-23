
const sidebar = document.querySelector('.sidebar')
const clock = document.querySelector('.container-for-clock')
const Title = document.querySelector('.Title')
const Button = document.querySelector('.closeSpan')
const BottomTitle = document.querySelector(".nav-title")
const BigButton = document.querySelector('.BigButton')
// const navItems = document.querySelectorAll('..sidebar nav li')
const Links = document.querySelectorAll('.link')
const Li = document.getElementsByTagName('li')

console.log(Links)



console.log(sidebar.className)
console.log(clock.className)

BigButton.addEventListener('click', ()=>{
    if(sidebar.className === 'sidebar'){sidebar.classList.add('openSidebar')}else{sidebar.classList.remove('openSidebar')}
    if(clock.className === 'container-for-clock'){clock.className = 'container-for-clock-open'}else{clock.className = 'container-for-clock'}
    if(Title.className === 'Title'){Title.className = 'openTitle'}else{Title.className = 'Title'}
    if(Links[0].className === 'link'){Links.forEach((e,i) =>{
        Links[i].className = 'openlink'
    })}else{
        Links.forEach((e,i) =>{
            Links[i].className = 'link'
        })
    }
    if(Button.className === 'closeSpan'){Button.className = 'openSpan'}else{Button.className = 'closeSpan'}
    
})



   
for (let i = 0; i < 4; i++) {
    
    Li[i].addEventListener('click', ()=>{
        console.log(i)
        for (let j = 0; j < 4; j++) {
            Li[j].classList.remove('active')

        }
        Li[i].classList.add('active')
    })
}