/ adicionar click box
for(let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener("click", function(){
         
        let el = checkEl(player1, player2);
        
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

                this.appendChild(cloneEl);

        //computing
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'ai-player'){
                    //execute play
                    computerPlay()

                    player2++;
                }

            }else{
                player2++;
            }

            // checking winner
            checkWinCondition()
        }
    });
}
// select game mode event
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout( function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500)
    });
}

//quem joga
function checkEl(player1,player2){
    if(player1 == player2){
        el = x;
    }else{
        el = o;
    }

    return el
}
