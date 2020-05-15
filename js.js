//ui vars
const addPlayer = document.getElementById('add-player');
const updateTotals = document.getElementById('update-totals');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('add-player-menu');
const menuBtn = document.getElementById('menu-btn');
const menuBtn2 = document.getElementById('add-player-menu-btn');
let menu1Toggled = false;
let menu2Toggled = false;

menuBtn.addEventListener('click', function () {


  if (!menu1Toggled) {
    menu1Toggled = true;
    menu.style.display = "block";
    menuBtn.style.transform = "rotate(45deg)";

  } else {
    menu1Toggled = false;
    menu.style.display = "none";
    menuBtn.style.transform = "rotate(90deg)";

  }
})

addPlayer.addEventListener('click', function () {


  if (!menu2Toggled) {
    menu2Toggled = true;
    menu2.style.display = "block";
    menuBtn2.style.display = "block";
    menuBtn2.style.transform = "rotate(45deg)";

  }
})

menuBtn2.addEventListener('click', function () {
  if (menu2Toggled === true) {
    menu2.style.display = "none";
    menuBtn2.style.display = "none";
    menu2Toggled = false;
  }
})




//player object
class Player {
  constructor(rank, name, buyins, earnings, endChips, netDollars) {
    this.rank = rank;
    this.name = name;
    this.buyins = buyins;
    this.earnings = earnings;
    this.endChips = endChips;
    this.netDollars = netDollars;
  }
}