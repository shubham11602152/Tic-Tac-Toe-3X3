var box1 = document.querySelector("#b1"),
  box2 = document.querySelector("#b2"),
  box3 = document.querySelector("#b3"),
  box4 = document.querySelector("#b4"),
  box5 = document.querySelector("#b5"),
  box6 = document.querySelector("#b6"),
  box7 = document.querySelector("#b7"),
  box8 = document.querySelector("#b8"),
  box9 = document.querySelector("#b9");
var winnerText = document.querySelector(".container p");



var reset = document.querySelector("#restart");
var squares = document.querySelectorAll('td button');
var turn = document.querySelector("#turn p");

var j = 0;
// var win = 0;
//function to mark X and O on Board.
function changeMarker() {
    win = 0;
  if (j % 2 == 0 && this.textContent === "") {
    this.textContent = "X";
    if(turn.textContent !== "Game Over !")
    {
    if (j < 8) {
      turn.textContent = "player 2 turn";
    } else {
      turn.textContent = "no turns left";
      winnerText.textContent = "Game Draw";
    }}
    j++;
    if(j>=4)
    {
      if(winnerText.textContent !== "Player 2 Wins" && winnerText.textContent !== "Player 1 Wins")
      {
      if(gameWinner() && gameWinner() === "X" )
      {
        winnerText.textContent = "Player 1 Wins";
        winnerText.style.background = 'rgba(6, 2, 209, 0.7)';
        winnerText.style.color = 'black';
        turn.textContent = "Game Over !";
        window.win = 1;

        for(var k = 0 ; k<squares.length;k++)
        {
          if(squares[k].textContent === "")
          {
          squares[k].disabled = true;
          }
        }
        return false ;
      }}
    }
  } else {
    if (this.textContent === "") {
      this.textContent = "O";
      if(turn.textContent !== "Game Over !")
      {
      if (j < 8 ) {
        turn.textContent = "player 1 turn";
      } else {
        turn.textContent = "no turns left";
        winnerText.textContent = "Game Draw";
      }}

      this.style.background = 'black';
      this.style.color = 'white';

      j++;
      if(j>=5)
      {
        if(winnerText.textContent !== "Player 1 Wins" && winnerText.textContent !== "Player 2 Wins")
        {
        if(gameWinner() && gameWinner() === "O" )
        {
          winnerText.textContent = "Player 2 Wins";
          winnerText.style.background = 'rgba(6, 2, 209, 0.7)';
          turn.textContent = "Game Over !";
          win++;
          for(var k = 0 ; k<squares.length;k++)
          {
            if(squares[k].textContent === "")
            {
            squares[k].disabled = true;
            }
          }
          return false ;
        }
      }
      }
    }
  }
  console.log(win);
return true;
}

for (var i = 0; i < squares.length; i++) {

  if( squares[i].addEventListener("click", changeMarker) === true)
  {
    // console.log(squares[i].addEventListener("click", changeMarker));


  }
  // else{
  //   console.log(gameWinner());
  //   break;
  // }

}



function gameWinner() {
  if (box1.textContent !== "" && box1.textContent == box2.textContent && box1.textContent == b3.textContent) {
    box1.style.background ="rgb(72, 201, 236)"  ;
    box2.style.background ="rgb(72, 201, 236)"  ;
    box3.style.background ="rgb(72, 201, 236)"  ;
    return box1.textContent ;
  } else if (box4.textContent !== "" && box4.textContent == box5.textContent && box4.textContent == box6.textContent) {
    box4.style.background ="rgb(72, 201, 236)"  ;
    box5.style.background ="rgb(72, 201, 236)"  ;
    box6.style.background ="rgb(72, 201, 236)"  ;
    return box4.textContent;
  } else if (box7.textContent !== "" && box7.textContent == box8.textContent && box7.textContent == box9.textContent) {
    box7.style.background ="rgb(72, 201, 236)"  ;
    box8.style.background ="rgb(72, 201, 236)"  ;
    box9.style.background ="rgb(72, 201, 236)"  ;
    return box7.textContent;
  } else if (box1.textContent !== "" && box1.textContent == box4.textContent && box1.textContent == box7.textContent) {
    box1.style.background ="rgb(72, 201, 236)"  ;
    box4.style.background ="rgb(72, 201, 236)"  ;
    box7.style.background ="rgb(72, 201, 236)"  ;
    return box1.textContent;
  } else if (box2.textContent !== "" && box2.textContent == box5.textContent && box2.textContent == box8.textContent) {
    box2.style.background ="rgb(72, 201, 236)"  ;
    box5.style.background ="rgb(72, 201, 236)"  ;
    box8.style.background ="rgb(72, 201, 236)"  ;
    return box2.textContent;
  } else if (box3.textContent !== "" && box3.textContent == box6.textContent && box3.textContent == box9.textContent) {
    box3.style.background ="rgb(72, 201, 236)"  ;
    box6.style.background ="rgb(72, 201, 236)"  ;
    box9.style.background ="rgb(72, 201, 236)"  ;
    return box3.textContent;
  } else if (box1.textContent !== "" && box1.textContent == box5.textContent && box1.textContent == box9.textContent) {
    box1.style.background ="rgb(72, 201, 236)"  ;
    box5.style.background ="rgb(72, 201, 236)"  ;
    box9.style.background ="rgb(72, 201, 236)"  ;
    return box1.textContent;
  } else if (box3.textContent !== "" && box3.textContent == box5.textContent && box3.textContent == box7.textContent) {
    box3.style.background ="rgb(72, 201, 236)"  ;
    box5.style.background ="rgb(72, 201, 236)"  ;
    box7.style.background ='rgb(72, 201, 236)' ;
    return box3.textContent;
  } else {
    return false;
  }
}

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].style.background = 'white';
    squares[i].style.color = 'black';
    squares[i].disabled = false;
  }
  winnerText.textContent = "Best One Wins";
  winnerText.style.background = 'linear-gradient(to right,#38ADAE,#CD295A)';
  turn.textContent = "player 1 turn"
  j = 0;
}

  reset.addEventListener("click", clearBoard);
