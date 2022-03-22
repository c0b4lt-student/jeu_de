$(document).ready(() => {
  let P1 = $(`#P1-name`);
  let P2 = $(`#P2-name`);
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
       return setActivePlayer(P2, P1);
     } else {
       return setActivePlayer(P1, P2);
     }
  }

  $(`#new-game-button`).click(() => {
    let startPlayer = Math.random() < 0.5 ? 1 : 2; //random number from 1 to 2

    askName(P1, `1`);
    askName(P2, `2`)
    startPlayer === 1 ? activePlayer = setActivePlayer(P1, P2) : activePlayer = setActivePlayer(P2, P1);
    dice = 0;
  });

  $(`#roll-button`).click(() => {
    dice = Math.floor(Math.random() * (6) + 1);
    console.log(dice);
    if (dice === 1) {
      activePlayer = changeActivePlayer(activePlayer);
    } else {

    }
  })
});