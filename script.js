const game = ["","","","","","","","",""]

let player = "x";
let count=0;

const boxes = document.querySelectorAll(".box")
console.log(boxes.length)
boxes.forEach((box)=>{
    box.addEventListener("click",() => { 
        console.log(box)
        count++;       
        game[box.getAttribute("data-key")]=player
        if(box.getAttribute("data-value")){
            alert("already filled")
            count--;
            return;
        }
        else if(player==="x"){
            const xbox =  box.querySelector(".mark-x");
            xbox.removeAttribute("hidden")
            box.setAttribute("data-value","x")
            player="o"
        }
        else{
            const obox = box.querySelector(".mark-o");
            obox.removeAttribute("hidden");
            box.setAttribute("data-value","o")
            player="x";
        }

        console.log(game)

        const matchwin = (game[0]===game[1] && game[1]===game[2] && game[0]!="") || (game[3]===game[4] && game[4]===game[5] && game[3]!="") || (game[6]===game[7] && game[7]===game[8] && game[6]!="") || (game[0]===game[4] && game[4]===game[8] && game[0]!="") || (game[2]===game[4] && game[4]===game[6] && game[2]!="") || (game[0]===game[3] && game[3]===game[6] && game[0]!="") || (game[1]===game[4] && game[4]===game[7] && game[1]!="") || (game[2]===game[5] && game[5]===game[8] && game[2]!="")
        
        if(matchwin == true){
            setTimeout(()=>{
                player = player==="x"? "o" : "x";
                alert("Player "+player+" wins")
                window.location.reload();
            },(100))
        }
        else if(count === 9 ){
            setTimeout(()=>{
                alert("Match Draw")
                window.location.reload();
            },(200))
        }

    })
})

