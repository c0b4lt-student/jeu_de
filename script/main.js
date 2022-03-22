$(document).ready(() => {
  let P1 = $(`#P1-name`);
  let P2 = $(`#P2-name`);
  let P1Current = $(`#P1-current`);
  let P2Current = $(`#P2-current`);
  let current = P1Current;
  let P1Total = $(`#P1-score`);
  let P2Total = $(`#P2-score`);
  let total = P1Total;
  let activePlayer = P1;
  let dice = 0;

  function askName(player, no) {
    let name = ``;

    while (name  === ``) {
      name = prompt(`What's Player ${no}'s name ?`).toUpperCase();
    }
    player.html(`${name}&nbsp&nbsp&nbsp`);
  }

  function setActivePlayer(active, unactive) {
    active.removeClass(`P-name-unactive`).addClass(`P-name-active`);
    unactive.removeClass(`P-name-active`).addClass(`P-name-unactive`);
    return (active);
  }

  function changeActivePlayer(active) {
     if (active === P1) {
       current = P2Current;
       total = P2Total;
       return setActivePlayer(P2, P1);
     } else {
       current = P1Current;
       total = P1Total;
       return setActivePlayer(P1, P2);
     }
  }

  function changeDiceImg(number) {
    $(`#dice-img`).attr(`src`, `../images/dice/dice_${number}.png`);
  }

  $(`#new-game-button`).click(() => {
    let startPlayer = Math.random() < 0.5 ? 1 : 2; //random number from 1 to 2

    askName(P1, `1`);
    askName(P2, `2`)
    if (startPlayer === 2) {
      changeActivePlayer(P1);
    }
    dice = 0;
  });

  $(`#roll-button`).click(() => {
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
});