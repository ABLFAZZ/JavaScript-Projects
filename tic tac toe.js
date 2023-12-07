let boxes = document.querySelectorAll(".tic-toe");
let resetButton = document.querySelector(".reset");
let winnerPlayer = document.querySelector(".winner-and-loser")

let turn0=true;


let boxArr = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],

]



let resetbtn= ()=>{

      turn0=true;
    
      

}

function clearGame(){
      for(let box of boxes){
            box.disabled=false;
            box.innerHTML=""; 
            
      }
      winnerPlayer.innerHTML=""
}


let disabledBoxes =()=>{
      for(let box of boxes ){
            box.disabled=true;
      }
}


let ticToeGame=boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
           
            if(turn0){
                  box.style.color="red"
                  box.innerHTML="O";
                  turn0 =false
                 


            }else {
                  box.style.color="yellow"
                  box.innerHTML="X"
                  turn0=true;
                 
                  

            }
            

            box.disabled=true;

            winnerCheck()
      })
     
})



let winnerCheck = ()=>{
      for(let winner of boxArr){
           let pos1 = boxes[winner[0]].innerHTML
           let pos2 = boxes[winner[1]].innerHTML
           let pos3 = boxes[winner[2]].innerHTML
           if(pos1 !="" && pos2 !="" && pos3 !=""){
                  if(pos1 == pos2 && pos2 == pos3){
                       winnerPlayer.innerHTML = `Winner ${pos1}`
                       
                       disabledBoxes()
                  }
           }
      }
}

for(let box of boxes){
      if(box == "O"){
           boxes.style.color="red"
      }
}

// [0,1,2],
//      [3,4,5],
//      [6,7,8],
//      [6,7,8],
//      [0,3,6],
//      [1,4,7],
//      [2,5,8],
//      [0,4,8],
//      [2,4,6],