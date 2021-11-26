{

function playGame(playerInput){  
   
  clearMessages()

  function getMoveName(MoveId){
    if(MoveId == 1) return 'kamień';
    else if(MoveId == 2) return 'papier';
    else if(MoveId == 3) return 'nożyce';
  }

  function displayResult(ComputerMove, PlayerMove){ 
    if(ComputerMove === PlayerMove) return 'Ty remisujesz!';
    else if (PlayerMove === 'papier' && ComputerMove === 'nożyce') return 'Ty przegrywasz!';
    else if (PlayerMove === 'kamień' && ComputerMove === 'papier') return 'Ty przegrywasz!';
    else if (PlayerMove === 'nożyce' && ComputerMove === 'kamień') return 'Ty przegrywasz!';
    else {
      return 'Ty wygrywasz!';
    }
  }

  console.log ('Wynik to: ' + displayResult)

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);




  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);



  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);




  const gameResult = displayResult(computerMove, playerMove);

  printMessage ('Wynik to: ' + gameResult);

}

const rockBtn = document.getElementById('play-rock');

rockBtn.addEventListener('click', function(){
  playGame(1);
});

const scissorBtn = document.getElementById('play-scissor');

scissorBtn.addEventListener('click', function(){
  playGame(3);
});

const paperBtn = document.getElementById('play-paper');
paperBtn.addEventListener('click', function(){
  playGame(2);
});

}