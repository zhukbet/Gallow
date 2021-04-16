const input = document.querySelector(".input")
const allbutton = document.querySelector(".ALLbutton")


const currentWord = document.querySelector(".current_word")
const laters = document.querySelector(".current_laters")
const hp=document.querySelector(".hp")
const gameover=document.querySelector(".game_over")
const youwin=document.querySelector(".youwin")
const gamelost=document.querySelector(".gamelost")
const game = [];

let countNewid = 0;
const id = () => ++countNewid;


const words = [
    "Pants",
    "Jacket",
    "iPhone Charger",
    "MacBook",
    "Sleeping Pills",
    "Underwear",
    "Hat",
    "HaAat",
    "T-Shirts",
    "Belt",
    "Passport",
    "Sandwich"
]


const newGame = word => ({
    isStart: false,
    _id: id(),
    word,
    arr_world: word_arr(word),
    wordLength: word.length,
    coorect_answer: ['a', 's', 'c'],
    hp: lifes()
})

const word_arr = word => {
    const new_arr = [];

    for (const arr of word) {
        if (
            !new_arr.includes(arr.toLowerCase()) &&
            arr.trim()
            &&
            (arr.toLowerCase() !== arr.toUpperCase())) {
            new_arr.push(arr.toLowerCase())
            
        }
    }
    return new_arr
}


const randomWord = () => randomWords = words[Math.floor(Math.random() * words.length)]


const getLG = () =>game.length-1


const painCurrent_word = () => {
    const curr_w = game[getLG()]
    let word=""
    let isAnswer = true
    for (const ans of curr_w.word) {

     if(curr_w.coorect_answer.includes(ans.toLowerCase())
        ||
        ans.toLowerCase()===ans.toUpperCase()
        ){
            islife = false
            word+=ans

        }else{
           word += '_'
        isAnswer = false
    
        }        
    }
      isAnswer && win()


         
    currentWord.innerHTML = word
}

const life_hp_minus = letter=>{
    const w = game[getLG()]

if(w.coorect_answer.includes(letter.toLowerCase())){

    if(
       !(w.word.toLowerCase().includes(letter.toLowerCase()))
    ){
    
 w.hp -=1
 if(w.hp==0){

      gamelost.classList.remove("anim")
      anim_add()
    } else {
        life() 
    }
   
    }
   
} 
    
}

const painCurrent_latter = () => laters.innerHTML=
game[getLG()].coorect_answer
.map(item=>`<p>${item}</p>`
)
.join("")
   
   


const lifes=()=>10


const life=()=>{
hp.innerHTML=game[getLG()].hp+" HP"
}

const win=()=>{
   
       console.log("YOU WIN")


youwin.classList.remove('anim')


  setTimeout(()=>anim_add(), 500)
    
}
const anim_add = () =>{
  currentWord.classList.add('anim')
    laters.classList.add("anim")
    gameover.classList.add("anim")
    hp.classList.add('anim')
    youwin.classList.add('anim')
    input.innerHTML=""
   setTimeout(()=>{add_or_remove_Go(true); grenInp(true)}, 1700)
    
}
const go = document.querySelector(".Go")
const add_or_remove_Go = isbool => {
go.classList.toggle('anim')
   

gamelost.classList.add("anim")

 go.disabled = false
   
}

const green=document.querySelector(".newWord") 
const grenInp=isBool=>{ 

    green.innerHTML= isBool ? `<input type="text"  class="add_word"> ` : '' 


const b =   document.querySelector('.butt_add')

        if(!isBool) return b.innerHTML = ''


   const w= document.querySelector('.add_word');
   w?.addEventListener('input', e=>{ 

const v = e.target.value.trim()

 b.innerHTML = v ? '<button class="footer_b">Add</button>'  : ''


 

document.querySelector(".footer_b")?.addEventListener("click",(e)=>{ 


let is_havent_Num_= true
    for(const latter of v){


               if(
                   +latter||
                   +latter===0 ||
                   latter.toLowerCase()===latter.toUpperCase()
           
                   ){

                    
        is_havent_Num_= false   

        }
      
    }

    is_havent_Num_ &&    words.push(v)  
  w.value=""
 })
})


}


grenInp(true)

gameover.addEventListener("click",(e)=>{
    anim_add ()
    gamelost.classList.remove("anim")
   })


go.addEventListener("click", (e) => {
    add_or_remove_Go()
go.disabled = true

    document.body.classList.remove("active")
    currentWord.classList.remove('anim')
    laters.classList.remove("anim")
    gameover.classList.remove("anim")
    hp.classList.remove('anim')

    grenInp()


   input.innerHTML=`<input class="input_main">`
 

game.push(newGame(randomWord()))

    painCurrent_word()
    painCurrent_latter() 
    life()
 



    document.querySelector('.input_main')?.addEventListener('input', (e)=>{

        if( !(+e.data)&&(e.data?.toLowerCase()!==e.data?.toUpperCase())) {


        if(!(game[getLG()].coorect_answer.includes(e.data))){
     game[getLG()].coorect_answer.push(e.data.toLowerCase())

  
        painCurrent_word()
   life_hp_minus(e.data)
   painCurrent_latter()
             e.target.value =e.data
        } else {
            e.target.value = ''
        }


        }
        else{
            e.target.value=""
        }
    
    })
    
}
)








