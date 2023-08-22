console.log("welocome to tic tac toe");
let music = new Audio ("music.mp3")
let start = new Audio ("start.mp3")
let gameover = new Audio("end.mp3")
let turn = "x"
let isgameover = false
// function to chnge the turn
const changeturn = ()=>{
    return turn === "x"? "0" :"x"
}
//function to check gor a win
const Checkwin=()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== "")  ) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
                isgameover = true
                document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "130px"
        }
         
         
    });
 }
//game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element=>{
    let boxtext = Element.querySelector(".boxtext")
    Element.addEventListener('click',()=>{
if (boxtext.innerText ===''){
    boxtext.innerText = turn;
   turn = changeturn();
    start.play();
    Checkwin()
    if(!isgameover){
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    }
} 
    })
})
reset.addEventListener('click',()=>{
let boxtext = document.querySelectorAll('.boxtext')
Array.from(boxtext).forEach(element=>{
    element.innerText=""
})
isgameover = false
document.getElementsByClassName('info')[0].innerText="Turn for" + turn;
document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px"

})