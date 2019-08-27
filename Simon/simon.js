let gameStart =document.getElementById("black");
let computerpattern =[];
let colorButtons = document.getElementsByClassName("square");
let playercounter = 0;
let playerturn =document.querySelectorAll("square").forEach;

gameStart.addEventListener("click", function(){
   let compChoice = computerChoice();
   document.getElementById(`${computerpattern}`).classList.add("active")
   console.log(computerpattern)
})


function computerChoice(){
    let choice = ["green", "red","yellow","blue"]
    let rndchoice = choice[Math.floor(Math.random()*choice.length)]
    computerpattern.push(rndchoice)
    
}


playerturn.addEventListener("click", function(){
   
})

function