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

        console.log(game);
        console.log(game[0]==game[1] && game[1]==game[2])

        const matchwin = (game[0]==game[1] && game[1]==game[2] && game[0]!="") || (game[3]==game[4] && game[4]==game[5] && game[3]!="") || (game[6]==game[7] && game[7]==game[8] && game[6]!="") || (game[0]==game[4] && game[4]==game[8] && game[0]!="") || (game[2]==game[4] && game[4]==game[6] && game[2]!="") || (game[0]==game[3] && game[6]==game[3] && game[0]!="") || (game[1]==game[4] && game[1]==game[7] && game[1]!="") || (game[2]==game[5] && game[5]==game[8] && game[2]!="")
        console.log(matchwin)
        
        if(matchwin == true){
            setTimeout(()=>{
                player = player==="x"? "o" : "x";
                alert("Player "+player+" wins")
                window.location.reload();
            },(100))
        }

        if(count === 9 ){
            alert("Match Draw")
            window.location.reload();
        }

    })
})

