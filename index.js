const boxes = document.querySelectorAll("#box");
const reset = document.querySelector("#reset");
const gameOver = document.querySelector("#gameOver")
const winnerIs = document.querySelector("#winnerName")
let randomNums = Math.floor(Math.random() * 10 + 1);



let turnX = false // false  = x    true = o

if(randomNums > 5){
turnX = false
}else{
    turnX = true
}


const pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X"
            turnX = false
        }else{
            box.innerText = "O"
            turnX = true
        }

        box.disabled = true
        checkWinnner()
    })
})

function checkWinnner(){
for(let lg of pattern){
   
    let pos1 = boxes[lg[0]].innerText
    let pos2 = boxes[lg[1]].innerText
    let pos3 = boxes[lg[2]].innerText

    if(pos1 != "" && pos2 != "" || pos3 != ""){
        if(pos1 == pos2 && pos2 == pos3){
            console.log(pos1)
            console.log(pos2)
            console.log(pos3)

boxes[lg[0]].classList = "winner"
boxes[lg[1]].classList = "winner"
boxes[lg[2]].classList = "winner"

            disabledBtn()
            winnerIs.innerText = `${pos1} is won`

            gameOver.style.display = "block"
            winnerIs.style.display = "block"


        }
    }
    
}
}

reset.onclick = () =>{
    boxes.forEach((e)=>{
        e.innerText = ''
        e.className = ""
    
    })
    enabledBtn()
    gameOver.style.display = "none"
    winnerIs.style.disabledBtn = "none"
    winnerIs.innerText = ""


}
function enabledBtn(){
    for(let i of boxes){
        i.disabled =  false;
    }
}
function disabledBtn(){
    for(let i of boxes){
        i.disabled =  true;
    }
}