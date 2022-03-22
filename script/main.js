$(document).ready(() => {
  //var declaration
  let P1 = $(`#P1-name`);
  let P2 = $(`#P2-name`);
  let P1Current = $(`#P1-current`);
  let P2Current = $(`#P2-current`);
  let current = P1Current;
  let P1Total = $(`#P1-score`);
  let P2Total = $(`#P2-score`);
  let total = P1Total;
  let activePlayer = P1;
  let dice = 1;

  function askName(player, no) {
    let name = ``;

    while (name  === ``) {
      name = prompt(`What's Player ${no}'s name ?`).toUpperCase();
    }
    player.html(`${name}&nbsp&nbsp&nbsp`);
  }//Ask for player's name

  function setActivePlayer(active, unactive) {
    active.removeClass(`P-name-unactive`).addClass(`P-name-active`);
    unactive.removeClass(`P-name-active`).addClass(`P-name-unactive`);
    return (active);
  }//Set "active" as active player

  function changeActivePlayer(active) {
    current.html(`0`);
    if (active === P1) {
       current = P2Current;
       total = P2Total;
       return setActivePlayer(P2, P1);
     } else {
       current = P1Current;
       total = P1Total;
       return setActivePlayer(P1, P2);
     }
  } //Switch active player

  function changeDiceImg(number) { //load another img for dice
    $(`#dice-img`).attr(`src`, `../images/dice/dice_${number}.png`);
  }

  function newGame() { // Init a new game
    let startPlayer = Math.random() < 0.5 ? 1 : 2; //random number from 1 to 2
    P1Current.html(`0`);
    P2Current.html(`0`);
    P1Total.html(`0`);
    P2Total.html(`0`);
    current = P1Current;
    total = P1Total;
    activePlayer = P1;

    askName(P1, `1`);
    askName(P2, `2`)
    if (startPlayer === 2) {
      activePlayer = changeActivePlayer(P1);
    }
    dice = 1;
  }

  newGame();

  $(`#new-game-button`).click(() => {
    newGame();
  });

  $(`#roll-button`).click(() => { //If the player click on roll, get a random number and stock it in current (ROUND)
    dice = Math.floor(Math.random() * (6) + 1);
    changeDiceImg(dice);
    if (dice === 1) {
      current.html(`0`);
      activePlayer = changeActivePlayer(activePlayer);
    } else {
      let currentScore = parseInt(current.html());

      currentScore += dice;
      current.html(currentScore);
    }
  });

  $(`#hold-button`).click(() => {// If the player click on hold, put current(ROUND) value in total (GLOBAL)
    let curTotal = parseInt(total.html());

    curTotal += parseInt(current.html());
    total.html(curTotal);
    if (curTotal >= 100) {
      alert(`${activePlayer.html().substring(0,activePlayer.html().length - 18)} win this game !`);
      newGame();
    }
    activePlayer = changeActivePlayer(activePlayer);
  });
});