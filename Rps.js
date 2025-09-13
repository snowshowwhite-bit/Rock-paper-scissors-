
 let score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      loose:0,
      tie:0
      };
  
    display();
    function pickComputerMove () {
      
      const randomNumber = Math.random();
       let computerMove = '';
      
      if (randomNumber >= 0 && randomNumber <= 1/3 ) {
       computerMove = 'rock';}
       
       else if ( randomNumber > 1/3 && randomNumber <= 2/3) { computerMove = 'paper';}
       
       else if ( randomNumber >2/3 && randomNumber <= 1) { computerMove = 'scissor';}
       
       return computerMove;
    }
    
     function playGame(playerMove){
    
 const computerMove = pickComputerMove();
       let result = '';
      
       if(playerMove === 'scissor') {
       if ( computerMove === 'rock') {
       result = 'you loose';}
       
       else if ( computerMove === 'paper')
       { result = 'you win';}
       
       else if ( computerMove === 'scissor') { result = 'tie';}
       }
       else if (playerMove === 'paper') {
         
       if ( computerMove === 'rock'){
       result = 'you win';}
       else if ( computerMove === 'paper')
       { result = 'tie';}
       else if (computerMove === 'scissor'){ result = 'you loose'; }
       }
       
       else if (playerMove === 'rock'){
       
         if (computerMove === 'rock'){
       result = 'tie';}
      else if (computerMove === 'paper')
     { result = 'you loose'; }
     else if ( computerMove === 'scissor')
      { result = 'you win'; }
       }


  if (result === 'you win'){ score.win += 1;}
    else if (result === 'you loose') {score.loose += 1;}
    else if ( result === 'tie') {
      score.tie += 1;}
       
     localStorage.setItem('score',JSON.stringify(score));
     
      document.querySelector('.update-result').innerHTML = `you pick <img class="move-img" src="images/${playerMove}-emoji.png" alt= "${playerMove}"> computer pick <img class= "move-img" src="images/${computerMove}-emoji.png" alt= "${computerMove}">
        <br>
        ${result}`;  
   
       display();
    
     }
     
    function display(){
    
      document.querySelector('.update-score').innerHTML = `wins:${score.win} loose:${score.loose} tie:${score.tie}`;
    }
      
    