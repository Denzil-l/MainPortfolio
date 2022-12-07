
const mainButtons = document.querySelectorAll('.nav-item')
const contcacts = document.querySelectorAll('.page-three__link')
const scrollBlock = document.querySelectorAll('.scroll-block__page')
const sidebar = document.querySelector('.sidebar')
const page = document.querySelector('.page')
const item = document.querySelectorAll('.item')
const itemH3 = document.querySelectorAll('.item h3')
const itemH4 = document.querySelectorAll('.item h4')
const clock = document.querySelector('.container-for-clock')
const Title = document.querySelector('.Title')
const Button = document.querySelector('.closeSpan')
const BottomTitle = document.querySelector(".nav-title")
const BigButton = document.querySelector('.BigButton')
const Links = document.querySelectorAll('.link')
const Li = document.getElementsByTagName('li')
const boxes = document.querySelectorAll('.box')
const one = document.querySelector('.one')
const Bottom = document.querySelectorAll('.conteiner-bottom')
const Top = document.querySelectorAll('.conteiner-top')
const Grid = document.querySelectorAll('.grid-block')
let coordinates = []

function Randomium(min,max){
    let randomium = Math.floor(Math.random()*100)
    if(randomium < min || randomium > max){randomium = Randomium(min,max)}
    return randomium
}

function RandomRandom(defaulpropety) {
    
    contcacts.forEach((e,i)=>{
        switch (true) {
            case i === 0:
                setTimeout(()=>{
                    
                
                    coordinates[i] = [0,0]
                    let randomiumY  =Randomium(0,33)
                    coordinates[i][0] = randomiumY
                    contcacts[i].style.top = `${randomiumY}%`
                    let randomiumX = Randomium(0,16)
                    coordinates[i][1] = randomiumX
                    contcacts[i].style.left = `${randomiumX}%`
                    contcacts[i].style.opacity = `1`
                    
                },500 + i*200)
                break;
            case i === 1:
                setTimeout(()=>{
               
                    coordinates[i] = [0,0]
                    let randomiumY  =Randomium(33,66)
                    coordinates[i][0] = randomiumY
                    contcacts[i].style.top = `${randomiumY}%`
                    let randomiumX = Randomium(0,32)
                    coordinates[i][1] = randomiumX
                    contcacts[i].style.left = `${randomiumX}%`
                    contcacts[i].style.opacity = `1`
                    
                    
                },500 + i*200)
                break;
            case i === 2:
                setTimeout(()=>{
                   
                    coordinates[i] = [0,0]
                    let randomiumY  =Randomium(67,90)
                    coordinates[i][0] = randomiumY
                    contcacts[i].style.top = `${randomiumY}%`
                    let randomiumX = Randomium(0,28)
                    coordinates[i][1] = randomiumX
                    contcacts[i].style.left = `${randomiumX}%`
                    contcacts[i].style.opacity = `1`
                    
                   
                    
                },500 + i*200)
                break;
            case i === 3:
                setTimeout(()=>{
                    
                    coordinates[i] = [0,0]
                    let randomiumY  =Randomium(0,50)
                    coordinates[i][0] = randomiumY
                    contcacts[i].style.top = `${randomiumY}%`
                    let randomiumX = Randomium(50,83)
                    coordinates[i][1] = randomiumX
                    contcacts[i].style.left = `${randomiumX}%`
                    contcacts[i].style.opacity = `1`
                    
                },500 + i*200)
                break;
            case i === 4:

                setTimeout(()=>{
                    
                    coordinates[i] = [0,0]
                    let randomiumY  =Randomium(50,70)
                    coordinates[i][0] = randomiumY
                    contcacts[i].style.top = `${randomiumY}%`
                    let randomiumX = Randomium(50,70)
                    coordinates[i][1] = randomiumX
                    contcacts[i].style.left = `${randomiumX}%`
                    contcacts[i].style.opacity = `1`
                    
                    
                },500 + i*200)
                break;  
            default:
                break;
        }
        })
}
function RandomPosition() {
    const defaulpropety = [[0,0],[10,0],[10,0],[10,10],[10,10]]

    setTimeout(()=>{
        RandomRandom(defaulpropety)
    },500)
    setInterval(()=>{
    RandomRandom(defaulpropety)
    },5000)
}



mainButtons[2].addEventListener('click', RandomPosition)
function Active() {
    for (let i = 0; i < 4; i++) {
    
        Li[i].addEventListener('click', ()=>{
            // console.log(i)
            for (let j = 0; j < 4; j++) {
                Li[j].classList.remove('active')
    
            }
            Li[i].classList.add('active')
        })
    } 
}
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
    boxes[i].addEventListener('mouseover', ()=>{
        console.log(Top[i])
        Top[i].style.height ="100%"
        Top[i].style.borderBottom = '2px solid rgba(255, 255, 255, 0.09)'
        Bottom[i].style.borderTop = '2px solid rgba(255, 255, 255, 0.09)'
        Bottom[i].style.height ="100%"

    })
    boxes[i].addEventListener('mouseout', ()=>{
        console.log(Top[i])
        Top[i].style.height ="0%"
        Bottom[i].style.height ="0%"
        Top[i].style.borderBottom = '0px solid rgba(255, 255, 255, 0.09)'
        Bottom[i].style.borderTop = '0px solid rgba(255, 255, 255, 0.09)'
    })
}
let main = 0
Grid.forEach((e,i)=>Grid[i].style.zIndex = '3')
Grid[0].style.zIndex = '4'
scrollBlock.forEach((e,i)=>{
    scrollBlock[i].addEventListener('click', ()=>{
        Grid.forEach((elem,index)=>{

            Grid[index].style.zIndex = '3'
            Grid[index].style.opacity = '0'
        })
        Grid[i].style.zIndex = '4'
        Grid[i].style.opacity = '1'

    })
})

Active()
   
