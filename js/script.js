
function getMoveName(MoveId){
  if(MoveId == 1){
    return 'kamień';
  } else if(MoveId == 2){
    return 'papier';
  } else if(MoveId == 3){
    return 'nożyce';
  }
}

function displayResult(ComputerMove, PlayerMove){ 
  if(ComputerMove === PlayerMove){
    return 'Ty remisujesz!';
  } else if (PlayerMove === 'papier' && ComputerMove === 'nożyce'){
    return 'Ty przegrywasz!';
  } else if (PlayerMove === 'kamień' && ComputerMove === 'papier'){
    return 'Ty przegrywasz!';
  } else if (PlayerMove === 'nożyce' && ComputerMove === 'kamień'){
    return 'Ty przegrywasz!';
  } else {
    return 'Ty wygrywasz!';
  }
}

console.log ('Wynik to: ' + displayResult)

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);




let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);




let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);




let gameResult = displayResult(computerMove, playerMove);

printMessage ('Wynik to: ' + gameResult);

 

