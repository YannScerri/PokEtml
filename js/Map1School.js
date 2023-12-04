const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


//canvas.width = 1024;
//canvas.height = 576;

let level = "Débutant"

canvas.width = 1024;
canvas.height = 576;

let roundBattle = 1;

class Sprite {
    constructor({position, velocity, image, frame = {max : 1}, sprites, animate = false, rotation=0, scale=1}){
        this.position = position
        this.image = new Image()
        this.frame = {...frame, val:0, elapsed :0}
        this.image.onlad = () =>{
            this.width = this.image.width / this.frame.max *scale
            this.height = this.image.height *scale

        }
        this.image.src =image.src

        this.animate = animate
        this.sprites=sprites
        this.moving = false;
    }
    draw(){
        
        c.drawImage(
            
            this.image, 
            this.frame.val* this.image.width/4,
            //this.position.x, 
            //this.position.y
            //0,
            0,
            this.image.width/this.frame.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frame.max,
            this.image.height
            )
            if(!this.moving) return
            if(this.frame.max>1){
                this.frame.elapsed++
            }
            if(this.frame.elapsed%10===0)
            if (this.frame.val<this.frame.max-1)this.frame.val++
            else this.frame.val=0
    
        }

    
}



const collisionsMap = []
for (let i=0;i<collisions.length; i+= 32){
    collisionsMap.push(collisions.slice(i,32+i))
}

const collisionMapWall = []
for(let i=0;i<collisionWall.length; i+= 32){
    collisionMapWall.push(collisionWall.slice(i,32+i))
}
const collisionMapWall2 = []
for(let i=0;i<collisionWall2.length; i+= 32){
    collisionMapWall2.push(collisionWall2.slice(i,32+i))
}
const collisionMapWall3 = []
for(let i=0;i<collisionWall3.length; i+= 32){
    collisionMapWall3.push(collisionWall3.slice(i,32+i))
}
const collisionMapWall4 = []
for(let i=0;i<collisionWall4.length; i+= 32){
    collisionMapWall4.push(collisionWall4.slice(i,32+i))
}
const collisionInsideWall = []
for(let i=0;i<collisionInside.length; i+= 182){
     
    collisionInsideWall.push(collisionInside.slice(i,342+i))
}
const collisionWallTeacher1 = []
for(let i=0;i<collisionTeacher1.length; i+= 182){
     
    collisionWallTeacher1.push(collisionTeacher1.slice(i,341+i))
}
const collisionWallTeacher2 = []

for(let i=0;i<collisionTeacher2.length; i+= 182){
     
    collisionWallTeacher2.push(collisionTeacher2.slice(i,341+i))
}
const collisionWallTeacher3 = []

for(let i=0;i<collisionTeacher3.length; i+= 182){
     
    collisionWallTeacher3.push(collisionTeacher3.slice(i,341+i))
}


class Boundary {
    static width = 24
    static height = 24
    constructor ({position}){
        this.position = position
        this.width = 24
        this.height = 24
    }
    draw(){
        c.fillStyle="red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class Boundary16{
    static width = 32
    static height = 32
    constructor ({position}){
        this.position = position
        this.width = 32
        this.height = 32
    }
    draw(){
        c.fillStyle="red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const offset = {
    x:-1375,
    y:-1350
}
const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol===27512)
        boundaries.push(
            new Boundary({
                position: {
                    x:j*Boundary.width +89,
                    y:i*Boundary.height+ 215 
        }}))
    })
})

const boundariesWall =[]
collisionMapWall.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol===27511)
        boundariesWall.push(
            new Boundary({
                position: {
                    x:j*Boundary.width + 426,
                    y:i*Boundary.height +350
        }}))
    })
})
const boundariesWall2 =[]
collisionMapWall2.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol===27511)
        boundariesWall2.push(
            new Boundary({
                position: {
                    x:j*Boundary.width +300,
                    y:i*Boundary.height+ 212 
        }}))
    })
})
const boundariesWall3 =[]
collisionMapWall3.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol===27511)
        boundariesWall3.push(
            new Boundary({
                position: {
                    x:j*Boundary.width +405,
                    y:i*Boundary.height+ 212

        }}))
    })
})
const boundariesWall4 =[]
collisionMapWall4.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol===27511)
        boundariesWall4.push(
            new Boundary({
                position: {
                    x:j*Boundary.width +255,
                    y:i*Boundary.height+ 212 
        }}))
    })
})
const boundariesWallsInside = []
collisionInsideWall.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol!=0)
        boundariesWallsInside.push(
            new Boundary16({
                position: {
                    x:j*Boundary16.width - (10016 -332) ,
                    y:i*Boundary16.height -(5928+3825)
        }}))
    })
})

const boundariesTeacher1 = []
collisionWallTeacher1.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol!=0)
        boundariesTeacher1.push(
            new Boundary16({
                position: {
                    x:j*Boundary16.width - (10016 -332) ,
                    y:i*Boundary16.height -(5928+3825)
        }}))
    })
})
const boundariesTeacher2 = []
collisionWallTeacher2.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol!=0)
        boundariesTeacher2.push(
            new Boundary16({
                position: {
                    x:j*Boundary16.width - (10016 -332) ,
                    y:i*Boundary16.height -(5928+3825)
        }}))
    })
})
const boundariesTeacher3 = []
collisionWallTeacher3.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if(symbol!=0)
        boundariesTeacher3.push(
            new Boundary16({
                position: {
                    x:j*Boundary16.width - (10016 -332) ,
                    y:i*Boundary16.height -(5928+3825)
        }}))
    })
})


c.fillStyle='white';
c.fillRect(0,0,canvas.width, canvas.height);

const imageBackG = new Image();
imageBackG.src = './images/ETML_School.png';

const imageBackG2 = new Image();
imageBackG2.src = './images/InsideSchoolComplete.png';
//imageBackG.src = './images/InsideSchoolComplete.png';



const playerImg = new Image();
playerImg.src = './images/PlayerDown.png';

const playerDownImg = new Image()
playerDownImg.src = './images/PlayerDown.png';

const playerUpImg = new Image()
playerUpImg.src = './images/PlayerUp.png';

const playerLeftImg = new Image()
playerLeftImg.src = './images/PlayerLeft.png';

const playerRightImg = new Image()
playerRightImg.src = './images/PlayerRight.png';

const player = new Sprite({
    position:{
        x: canvas.width/2 -80/4,
        y:canvas.height/2 +150
        
    },
    image: playerDownImg,
    frame:{
        max:4,
        hold:10
    },
    sprites:{
        up:playerUpImg,
        left:playerLeftImg,
        right:playerRightImg,
        down: playerDownImg,
    }
})
const background = new Sprite({
    position:{
        x:offset.x,
        y:offset.y
    },
    image:imageBackG
})

const background2 = new Sprite({
    position:{
        x:offset.x,
        y:offset.y
    },
    image:imageBackG2
})
const battle = {
    initated:false
}
const key = {
    w:{
        pressed : false
    },
    a:{
        pressed : false
    },
    s:{
        pressed : false
    },
    d:{
        pressed : false
    }
}
let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch(e.key){
        case'w':
            key.w.pressed =true
            lastKey = 'w'
            break
        case 'a' :
            key.a.pressed =true
            lastKey = 'a'
            break
        case 's':
            key.s.pressed =true
            lastKey = 's'

            break
        case 'd':
            key.d.pressed =true
            lastKey = 'd'

            break
    }
})
window.addEventListener('keyup', (e) => {
    switch(e.key){
        case'w':
        key.w.pressed =false
        break
        case 'a' :
            key.a.pressed =false
            break
        case 's':
            key.s.pressed =false
            break
        case 'd':
            key.d.pressed =false
            break
    }
})


function musicOn(song){
    if(song == 1){
        const audio= document.querySelector(".Battle_Music")
        audio.volume = 0.5;
        audio.play();
    }
    else{
        const audio= document.querySelector(".School_Music")
        audio.volume = 0.5;
        audio.play();
    }
    }

const movables = [background, ...boundaries, ...boundariesWall, ...boundariesWall2, ...boundariesWall3, ...boundariesWall4, background2, ...boundariesWallsInside, ...boundariesTeacher1,...boundariesTeacher2,...boundariesTeacher3]
function rectangularCollsion ({rectangle, rectangle2}){
    return(
        rectangle.position.x + rectangle.image.width/5 >=  rectangle2.position.x &&
        rectangle.position.x <= rectangle2.position.x +  rectangle2.width/2 &&
        rectangle.position.y +25 <= rectangle2.position.y +  rectangle2.height &&
        rectangle.position.y + rectangle.image.height >=  rectangle2.position.y 
    )
}

const testB = new Boundary({
    position:{
        x: canvas.width/2 -192/4,
        y:canvas.height/2-68
    }
})
const battleBackgroundUI = document.querySelector('.gameplayBattle')



let speedCam = 2;
function animate(){
    if (!battle.initated){
        battleBackgroundUI.style.visibility = "hidden"
    }
    
    document.querySelector(".textCanvasInfoPlayer").innerHTML = " Nom : "+ playerNameOficial +"<br><br> Pokemon : "+ pokemonPlayerName +" <br><br> Niveau : " + level

    if (!isInside){
        const animationID = window.requestAnimationFrame(animate)
        background.draw()
        //console.log("drawBack1")
        player.draw()
        /*testB.draw()
        boundaries.forEach((boundary)=>{
            //boundary.draw()
        })
        boundariesWall.forEach((boundary1)=>{
            //boundary1.draw()
        })
        boundariesWall2.forEach((boundary2)=>{
            //boundary2.draw()
    
        })
        boundariesWall3.forEach((boundary3)=>{
            //boundary3.draw()
    
        })
        boundariesWall4.forEach((boundary4)=>{
            //boundary4.draw()
    
        })*/ 
        let moving = true
        player.moving = false;
    
        if (battle.initated) 
        {
            //roundBattle=1;
            //isRoundBattleFinish = false;
            battleGame()
            return
        
        }
        if (isInside){
            insideSchool() 
            return
        }
    
        for (let i = 0; i<boundaries.length; i++)
        {
            const boundary = boundaries[i]
            if(!isInside && rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary
                    }) ){
                        battleBackgroundUI.style.display = "felx"
                        //battle.initated = true; 
                        isInside  = true;
                        background2.position.y = -3900
                        background2.position.x = -515
                }
            }
         if(key.w.pressed && lastKey==='w') 
        {
            player.image = player.sprites.up
            player.moving = true;
            for (let i = 0; i<boundariesWall2.length; i++)
            {
                const boundary = boundariesWall2[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y+speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall3.length; i++)
            {
                const boundary = boundariesWall3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y+speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall4.length; i++)
            {
                const boundary = boundariesWall4[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y+speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            if (moving){
                movables.forEach((movable)=>{
                    movable.position.y +=speedCam
                })
            }
            
        }
        else if(key.a.pressed && lastKey==='a'){
            player.image = player.sprites.left
            player.moving = true;
    
            
            for (let i = 0; i<boundariesWall.length; i++)
            {
                const boundary = boundariesWall[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x+speedCam,
                                y: boundary.position.y
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall4.length; i++)
            {
                const boundary = boundariesWall4[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x+speedCam,
                                y: boundary.position.y
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            if (moving){
                movables.forEach((movable)=>{
                    movable.position.x +=speedCam
                })
            }
        }
        else if (key.s.pressed && lastKey==='s'){
            player.image = player.sprites.down
            player.moving = true;
    
            
    
            for (let i = 0; i<boundariesWall4.length; i++)
            {
                const boundary = boundariesWall4[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y-speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall.length; i++)
            {
                const boundary = boundariesWall[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y-speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall3.length; i++)
            {
                const boundary = boundariesWall3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y-speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            if (moving){
                movables.forEach((movable)=>{
                    movable.position.y -=speedCam
                })
            }
        }
    
        else if (key.d.pressed && lastKey==='d'){
            player.image = player.sprites.right
            player.moving = true;
    
            for (let i = 0; i<boundariesWall.length; i++)
            {
                const boundary = boundariesWall[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x-speedCam,
                                y: boundary.position.y
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesWall3.length; i++)
            {
                const boundary = boundariesWall3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x-speedCam,
                                y: boundary.position.y
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
    
            if (moving){
                movables.forEach((movable)=>{
                    movable.position.x -=speedCam
                })
            }
        }
    }
    else{
        //imageBackG.src = './images/InsideSchoolComplete.png';
    document.querySelector(".textCanvasInfoPlayer").innerHTML = " Nom : "+ playerNameOficial +"<br><br> Pokemon : "+ pokemonPlayerName +" <br><br> Niveau : " + level + "<br><br> Chercher les enseignants"
    //console.log(background2.position.x)
    
    const animationID = window.requestAnimationFrame(animate)
    //console.clear();
    background2.draw()
    player.draw()
    /*
    boundariesWallsInside.forEach((boundaryInside)=>{
        boundaryInside.draw()
        //console.log(boundaryInside.position.x)
    })
    boundariesTeacher1.forEach((boundaryTeachers1)=>{
        boundaryTeachers1.draw()
    })
    boundariesTeacher2.forEach((boundaryTeachers2)=>{
        boundaryTeachers2.draw()
        //console.log(boundaryInside.position.x)
    })
    boundariesTeacher3.forEach((boundaryTeachers3)=>{
        boundaryTeachers3.draw()
    })*/
    moving = true
    player.moving = false;


    if (battle.initated) 
    {        
        battleGame()
        return    
    }

    if(key.w.pressed && lastKey==='w') 
    {
        player.image = player.sprites.up
        player.moving = true;
        
        for (let i = 0; i<boundariesWallsInside.length; i++)
            {
                const boundary = boundariesWallsInside[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x,
                                y: boundary.position.y+speedCam
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }

            for (let i = 0; i<boundariesTeacher1.length; i++)
            {
                const boundary = boundariesTeacher1[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 1){
                        battle.initated = true;
                    }
                }
            }
            for (let i = 0; i<boundariesTeacher2.length; i++)
            {
                const boundary = boundariesTeacher2[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 2){
                        battle.initated = true;
                    }
                }
            }
            for (let i = 0; i<boundariesTeacher3.length; i++)
            {
                const boundary = boundariesTeacher3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 3){
                        battle.initated = true;
                    }
                }
            }


        if (moving){
            movables.forEach((movable)=>{
                movable.position.y +=speedCam
            })
        }
    }
    else if(key.a.pressed && lastKey==='a'){
        player.image = player.sprites.left
        player.moving = true;

        for (let i = 0; i<boundariesWallsInside.length; i++)
            {
                const boundary = boundariesWallsInside[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : {
                            ...boundary,
                            position :{
                                x: boundary.position.x+speedCam,
                                y: boundary.position.y
                            }
                        }
                    })
                ){
                    moving = false
                    break
                }
            }
            for (let i = 0; i<boundariesTeacher1.length; i++)
            {
                const boundary = boundariesTeacher1[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 1){
                        battle.initated = true;
                    }                }
            }
            for (let i = 0; i<boundariesTeacher2.length; i++)
            {
                const boundary = boundariesTeacher2[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 2){
                        battle.initated = true;
                    }
                }
            }
            for (let i = 0; i<boundariesTeacher3.length; i++)
            {
                const boundary = boundariesTeacher3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 3){
                        battle.initated = true;
                    }
                }
            }
        if (moving){
            movables.forEach((movable)=>{
                movable.position.x +=speedCam
            })
        }
    }
    else if (key.s.pressed && lastKey==='s'){
        player.image = player.sprites.down
        player.moving = true;

        for (let i = 0; i<boundariesWallsInside.length; i++)
        {
            const boundary = boundariesWallsInside[i]
            if(
                rectangularCollsion({
                    rectangle : player,
                    rectangle2 : {
                        ...boundary,
                        position :{
                            x: boundary.position.x,
                                y: boundary.position.y-speedCam
                        }
                    }
                })
            ){
                moving = false
                break
            }
        }
        for (let i = 0; i<boundariesTeacher1.length; i++)
            {
                const boundary = boundariesTeacher1[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 1){
                        battle.initated = true;
                    }                }
            }
            for (let i = 0; i<boundariesTeacher2.length; i++)
            {
                const boundary = boundariesTeacher2[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 2){
                        battle.initated = true;
                    }
                }
            }
            for (let i = 0; i<boundariesTeacher3.length; i++)
            {
                const boundary = boundariesTeacher3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 3){
                        battle.initated = true;
                    }
                }
            }
        if (moving){
            movables.forEach((movable)=>{
                movable.position.y -=speedCam
            })
        }
    }

    else if (key.d.pressed && lastKey==='d'){
        player.image = player.sprites.right
        player.moving = true;

        for (let i = 0; i<boundariesWallsInside.length; i++)
        {
            const boundary = boundariesWallsInside[i]
            if(
                rectangularCollsion({
                    rectangle : player,
                    rectangle2 : {
                        ...boundary,
                        position :{
                            x: boundary.position.x-speedCam,
                                y: boundary.position.y
                        }
                    }
                })
            ){
                moving = false
                break
            }
        }
        for (let i = 0; i<boundariesTeacher1.length; i++)
            {
                const boundary = boundariesTeacher1[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 1){
                        battle.initated = true;
                    }                }
            }
            for (let i = 0; i<boundariesTeacher2.length; i++)
            {
                const boundary = boundariesTeacher2[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 2){
                        battle.initated = true;
                    }
                }
            }
            for (let i = 0; i<boundariesTeacher3.length; i++)
            {
                const boundary = boundariesTeacher3[i]
                if(
                    rectangularCollsion({
                        rectangle : player,
                        rectangle2 : boundary                        
                    })
                ){
                    //Condition
                    if (roundBattle == 3){
                        battle.initated = true;
                    }
                }
            }
        if (moving){
            movables.forEach((movable)=>{
                movable.position.x -=speedCam
            })
        }
    }
    }
    
}
    
    const introScene = document.querySelector('.introductionScene')
    const teacher = document.querySelector('.trainer')
    const panelGame= document.querySelector('.panel')
    let textPanelIntro= document.querySelector('.text')
    const btnNext = document.querySelector('.nextBtnIntro')
    const playerNamerValue = document.querySelector('.playerName')

    teacher.innerHTML = '<img src="./images/ProfesorOak.png">'
    const text1Intro = "Aujourd'hui, c'est votre premier jour en tant qu'informaticien ! <br> <br>  Êtes-vous prêt à apprendre et à défier les enseignants dans un combat de Pokémons ? "
    const text2Intro = "Pour commencer à programmer, veuillez entrer votre NOM <br> <br> Cliquez avec le bouton droit de la souris sur \" PlayerName \" en BLEU au-dessus \> Cliquez sur INSPECTER \> et modifier le avec votre nom <br> <br> \< h3 class = \"PlayerName\"\> VotreNom \< /h3\>  "
    const text3Intro = "Genial ! Vous avez appris à modifier du HTML. C'est ton tour de changer la couleur de la page web. <br><br> Dans INSPECTER, allez dans l'onglet SOURCES, ouvrez le fichier /css/style.css et changez la couleur d'arrière-plan en la première ligne  :<br><br>  \"Background-color : VotreCouleur;\""
    const text4Intro = "Super ! Vous avez appris à modifier le CSS du site web.  Ensuite, vous devez modifier le JavaScript pour choisir votre pokémon préféré. <br><br> 1 = Pikachu | 2 = Dracaufeu | 3 = Rondoudou <br><br> Dans INSPECTER> CONSOLE>  Ecrivez la commande suivante avec l'option souhaitée <br><br>  \"playerPokemon = (1,2 ou 3);\""
    const text5Intro = "Félicitations, tu as déjà ton pokémon qui t'accompagnera dans les combats. <br><br> Bonne chance et profitez des portes ouvertes à l'ETML."
    textPanelIntro.innerHTML = text1Intro
 
    const pokemonImg1 = document.querySelector(".pokemon1") 
        const pokemonImg2 = document.querySelector(".pokemon2") 
        const pokemonImg3 = document.querySelector(".pokemon3") 


    
function introductionScene(){
    
    //musicOn(0)
    btnNext.addEventListener('click', function(){
        selectOtion() 
    })
    
    roundBattle = 1;
}

let clicks = 0;
function selectOtion(){
    if(clicks==0){
        textPanelIntro.innerHTML = text2Intro
        clicks=1

    }
     else if(clicks==1){
        textPanelIntro.innerHTML = text3Intro
        

        clicks=2
    }
      else if(clicks==2){
        playerNameOficial = playerNamerValue.innerHTML
        textPanelIntro.innerHTML = text4Intro

        
        pokemonImg1.innerHTML = '<img class = pokemonImg1 src="./images/Pikachu.png">'
        pokemonImg2.innerHTML = '<img class = pokemonImg1 src="./images/Dracaufeu.png">'
        pokemonImg3.innerHTML = '<img class = pokemonImg1 src="./images/Rondoudou.png">'

        clicks=3
    }
      else if (clicks==3) {
        textPanelIntro.innerHTML = text5Intro
        pokemonImg1.style.visibility = "hidden"
        pokemonImg2.style.visibility = "hidden"
        pokemonImg3.style.visibility = "hidden"
        
        if(playerPokemon == 1){
            pokemonPlayerName = "Pikachu"

        }
        else if (playerPokemon == 2) {
         pokemonPlayerName = "Dracaufeu"

        }
        else{
            pokemonPlayerName = "Rondoudou"
        }

        playerPokemon = playerPokemon
        
        clicks=4
        console.log(playerNameOficial)
    }
    else{
        canvas.style.visibility="visible"
        introScene.style.visibility = "hidden"

    }
}

let introGameplay = document.querySelector('.introductionScene')
//let backgroundBattle = document.querySelector('')
function menuStart(){
    introGameplay.style.visibility="hidden"
}

let isInside = false;

function insideSchool(){
    //imageBackG.src = './images/InsideSchoolComplete.png';
    document.querySelector(".textCanvasInfoPlayer").innerHTML = " Nom : "+ playerNameOficial +"<br><br> Pokemon : "+ pokemonPlayerName +" <br><br> Niveau : " + level + "<br><br> Chercher les enseignants"

    const animationID = window.requestAnimationFrame(animate)
    //console.clear();
    console.log(background2.draw().position.x)
    background2.draw()
    player.draw()

    moving = true
    player.moving = false;


    if (battle.initated) 
    {        
         
        battleGame()
        return    
    }

    if(key.w.pressed && lastKey==='w') 
    {
        player.image = player.sprites.up
        player.moving = true;
    }
    else if(key.a.pressed && lastKey==='a'){
        player.image = player.sprites.left
        player.moving = true;
        if (moving){
            movables.forEach((movable)=>{
                movable.position.x +=speedCam
            })
        }
    }
    else if (key.s.pressed && lastKey==='s'){
        player.image = player.sprites.down
        player.moving = true;
        if (moving){
            movables.forEach((movable)=>{
                movable.position.y -=speedCam
            })
        }
    }

    else if (key.d.pressed && lastKey==='d'){
        player.image = player.sprites.right
        player.moving = true;
        if (moving){
            movables.forEach((movable)=>{
                movable.position.x -=speedCam
            })
        }
    }
}

//menuStart();

introductionScene();
animate();

