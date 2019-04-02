/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var gameState, scores , currentPlayer , generalScore;


function initGame(){

    gameState = true ;

    generalScore = [0,0];

    scores = [0,0];

    currentPlayer = 0 ; 

$("#current-0").text("0");
$("#current-1").text("0");
$("#score-0").text("0");
$("#score-1").text("0");
$(".dice").css("display" , "none");
$(".player-0-panel").addClass("active");
$(".player-1-panel").removeClass("active");
$(".player-0-panel").removeClass("winner");
$(".player-1-panel").removeClass("winner");
$(".player-1-panel").removeClass("player-name");
$(".player-1-panel").removeClass("player-name");
$("#name-0").text("Player 1");
$("#name-1").text("Player 2");

}


initGame()




//On clicking Dice Roll button



    
    $(".btn-roll").on("click", function(){

        if(gameState){
            
            var dice = Math.floor(Math.random()*6) + 1 ;
        if ( dice !== 1){
            var randomDice = $(".dice");
            randomDice.css("display" , "block");
            randomDice.attr("src" , "dice-"+ dice + ".png");
            scores[currentPlayer] +=  dice ; 
            $("#current-"+ currentPlayer).text(scores[currentPlayer]);
        } else { 
            $(".player-0-panel").toggleClass("active");
            $(".player-1-panel").toggleClass("active");
            $("#current-"+ currentPlayer).text("0")
            scores[currentPlayer]=0;
                $(".dice").attr("src" , "dice-"+ dice + ".png");
            //move to next player 
            if (currentPlayer === 0){
                currentPlayer = 1 ;
            } else {
                currentPlayer = 0 ;
            }
        }
        }

        
         
    });
    
    
    
    
    //  ON CLICKING HOLD BUTTON
    $(".btn-hold").on("click" , function(){
        // 1 // add the value of current score to general score
        generalScore[currentPlayer] += scores[currentPlayer];
        $("#score-"+currentPlayer).text(generalScore[currentPlayer]);
        $("#current-"+currentPlayer).text(0);
        scores[currentPlayer]=0;
        $(".player-0-panel").toggleClass("active");
        $(".player-1-panel").toggleClass("active");
        $(".dice").css("display" , "none");
        
        //if There is a winner //
                
        if (generalScore[currentPlayer]>= 40 ){
            $(".player-"+ currentPlayer +"-panel").toggleClass("winner");
            $("#name-"+currentPlayer).text("Winner!");
            $(".player-0-panel").removeClass("active")
            $(".player-1-panel").removeClass("active")
            gameState = false;
            } 
    
        // 2 // move to next player
        else {

            if (currentPlayer === 0){
                currentPlayer = 1 ;
            } else {    
                currentPlayer = 0 ;
            }
            
        }
    })
    
    
    



    
$(".btn-new").on("click" , initGame)


