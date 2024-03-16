//создание уведомления
const text = document.createElement("div");
const img = document.createElement("div");
const describe = document.createElement("div");
const not = document.getElementById("notification");

//прогресс бар + кнопка престижа
const progressbar = document.getElementById("progresspercent");
const Prestigebutton = document.getElementById("buttonPrestige");

//уведомления
const info = document.getElementById("info");
const nameinfo = document.createElement("div");
const priceinfo = document.createElement("div");
const nameinfo1 = document.createElement("div");
const priceinfo1 = document.createElement("div");
const information = document.getElementById("information");

//звуки
const audioclickoncoin = new Audio("audio/clicksound.wav");
const audioclickonbuybutton = new Audio("audio/clickonbuysound.wav");
const audioupgrade = new Audio("audio/upgrade.wav");
const audioachievement = new Audio("audio/achievment.wav");

// кнопки
const resetbutton = document.getElementById("ResetGame");
const resetach = document.getElementById("ResetAch");
const firstbuybutton = document.getElementById("buy1");
const secondbuybutton = document.getElementById("buy2");
const thirdbuybutton = document.getElementById("buy3");
const fourbuybutton = document.getElementById("buy4");
const fivebuybutton = document.getElementById("buy5");
const sixbuybutton = document.getElementById("buy6");
const sevenbuybutton = document.getElementById("buy7");
const eightbuybutton = document.getElementById("buy8");
const ninebuybutton = document.getElementById("buy9");
const tenbuybutton = document.getElementById("buy10");
const elevenbuybutton = document.getElementById("buy11");
const twelvebuybutton = document.getElementById("buy12");
const thirteenbuybutton = document.getElementById("buy13");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const upgrade4 = document.getElementById("upgrade4");
const upgrade5 = document.getElementById("upgrade5");
const upgrade6 = document.getElementById("upgrade6");
const upgrade7 = document.getElementById("upgrade7");
const upgrade8 = document.getElementById("upgrade8");
const upgrade9 = document.getElementById("upgrade9");
const upgrade10 = document.getElementById("upgrade10");
const upgrade11 = document.getElementById("upgrade11");
const upgrade12 = document.getElementById("upgrade12");
const upgrade13 = document.getElementById("upgrade13");
const upgrade14 = document.getElementById("upgrade14");
const upgrade15 = document.getElementById("upgrade15");

let prestigelvl = 0;
let progresscoins = 1.0e10; //кол-во монет для престижа
let allcoinsfromgame = 0; //всего накопленно монет
let coins_amount = 0; //сколько на твоём кошелке
let onetap_amount = 1; //сколько за 1 клик
let priceoffirstbutton = 15; //цена 1 покупки(1 кнопка)
let priceofsecondbutton = 100; //цена 1 покупки(2 кнопка)
let priceofthirdbutton = 1200; //цена 1 покупки(3 кнопка)
let priceoffourbutton = 12000; //цена 1 покупки (4 кнопки)
let priceoffivebutton = 120000; //цена 1 покупки (5 кнопки)
let priceofsixbutton = 1000000; //цена 1 покупки (6 кнопки)
let priceofsevenbutton = 20000000; //цена 1 покупки (7 кнопки)
let priceofeightbutton = 330000000; //цена 1 покупки (8 кнопки)
let priceofninebutton = 5100000000; //цена 1 покупки (9 кнопки)
let priceoftenbutton = 75000000000; //цена 1 покупки (10 кнопки)\
let priceofelevenbutton = 1000000000000; //цена 1 покупки (11 кнопки)
let priceoftwelvebutton = 14000000000000; //цена 1 покупки (12 кнопки)
let priceofthirteenbutton = 170000000000000; //цена 1 покупки (13 кнопки)
let cpersec = 0; // доход в секунду
let have1 = 0; // кол-во купленных 1 кнопки
let have2 = 0; // кол-во купленных 2 кнопки
let have3 = 0; //кол-во купленных 3 кнопки
let have4 = 0; //кол-во купленных 4 кнопки
let have5 = 0; //кол-во купленных 5 кнопки
let have6 = 0; //кол-во купленных 6 кнопки
let have7 = 0; //кол-во купленных 7 кнопки
let have8 = 0; //кол-во купленных 8 кнопки
let have9 = 0; //кол-во купленных 9 кнопки
let have10 = 0; //кол-во купленных 10 кнопки
let have11 = 0; //кол-во купленных 11 кнопки
let have12 = 0; //кол-во купленных 12 кнопки
let have13 = 0; //кол-во купленных 13 кнопки

let getfrom1 = 1; //сколько получаешь за 1 покупку постройки
let getfrom2 = 0.1; //сколько получаешь за 2 покупку постройки
let getfrom3 = 1; //сколько получаешь за 3 покупку постройки
let getfrom4 = 8; //сколько получаешь за 4 покупку постройки
let getfrom5 = 50; //сколько получаешь за 5 покупку постройки
let getfrom6 = 250; //сколько получаешь за 6 покупку постройки
let getfrom7 = 1400; //сколько получаешь за 7 покупку постройки
let getfrom8 = 7800; //сколько получаешь за 8 покупку постройки
let getfrom9 = 44000; //сколько получаешь за 9 покупку постройки
let getfrom10 = 260000; //сколько получаешь за 10 покупку постройки
let getfrom11 = 1600000; //сколько получаешь за 11 покупку постройки
let getfrom12 = 10000000; //сколько получаешь за 12 покупку постройки
let getfrom13 = 65000000; //сколько получаешь за 13 покупку постройки
let getfrom14 = 430000000; //сколько получаешь за 14 покупку постройки

let priceofupgrade1 = 300; //цена 1 улучшения
let priceofupgrade2 = 350; //цена 2 улучшения
let priceofupgrade3 = 1000; //цена 3 улучшения
let priceofupgrade4 = 11000; //цена 4 улучшения
let priceofupgrade5 = 120000; //цена 5 улучшения
let priceofupgrade6 = 1200000; //цена 6 улучшения
let priceofupgrade7 = 10000000; //цена 7 улучшения
let priceofupgrade8 = 200000000; //цена 8 улучшения
let priceofupgrade9 = 3300000000; //цена 9 улучшения
let priceofupgrade10 = 5100000000; //цена 10 улучшения
let priceofupgrade11 = 750000000000; //цена 11 улучшения
let priceofupgrade12 = 10000000000000; //цена 12 улучшения
let priceofupgrade13 = 14000000000000; //цена 13 улучшения
let priceofupgrade14 = 1700000000000000; //цена 14 улучшения
let priceofupgrade15 = 100000000000; //цена 15 улучшения

let upgradehave1 = 0; // кол-во купленных 1 кнопки
let upgradehave2 = 0; // кол-во купленных 2 кнопки
let upgradehave3 = 0; // кол-во купленных 3 кнопки
let upgradehave4 = 0; // кол-во купленных 4 кнопки
let upgradehave5 = 0; // кол-во купленных 5 кнопки
let upgradehave6 = 0; // кол-во купленных 6 кнопки
let upgradehave7 = 0; // кол-во купленных 7 кнопки
let upgradehave8 = 0; // кол-во купленных 8 кнопки
let upgradehave9 = 0; // кол-во купленных 9 кнопки
let upgradehave10 = 0; // кол-во купленных 10 кнопки
let upgradehave11 = 0; // кол-во купленных 11 кнопки
let upgradehave12 = 0; // кол-во купленных 12 кнопки
let upgradehave13 = 0; // кол-во купленных 13 кнопки
let upgradehave14 = 0; // кол-во купленных 14 кнопки
let upgradehave15 = 0;

let howmuchyougetfrom1 = 0; //сколько полученно с 1 кнопки
let howmuchyougetfrom2 = 0; //сколько полученно с 2 кнопки
let howmuchyougetfrom3 = 0; //сколько полученно с 3 кнопки
let howmuchyougetfrom4 = 0; //сколько полученно с 4 кнопки
let howmuchyougetfrom5 = 0; //сколько полученно с 5 кнопки
let howmuchyougetfrom6 = 0; //сколько полученно с 6 кнопки
let howmuchyougetfrom7 = 0; //сколько полученно с 7 кнопки
let howmuchyougetfrom8 = 0; //сколько полученно с 8 кнопки
let howmuchyougetfrom9 = 0; //сколько полученно с 9 кнопки
let howmuchyougetfrom10 = 0; //сколько полученно с 10 кнопки
let howmuchyougetfrom11 = 0; //сколько полученно с 11 кнопки
let howmuchyougetfrom12 = 0; //сколько полученно с 12 кнопки
let howmuchyougetfrom13 = 0; //сколько полученно с 13 кнопки

let achievementdone1 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone3 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone4 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone6 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone2 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone7 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone8 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone5 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone9 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone10 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone11 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone12 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone13 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone14 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone15 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone16 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone17 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone18 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone19 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone20 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone21 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone22 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone23 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone24 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone25 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone26 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone27 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone28 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone29 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone30 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone31 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone32 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone33 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone34 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone35 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone36 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone37 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone38 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone39 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone40 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone41 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone42 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone43 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone44 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone45 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone46 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone47 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone48 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone49 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone50 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone51 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone52 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone53 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone54 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone55 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone56 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone57 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone58 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone59 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone60 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone61 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone62 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone63 = 0; // проверка есть ли ачивка(номер в переменной)
let achievementdone64 = 0; // проверка есть ли ачивка(номер в переменной)

// Смена темы

const toggle = document.getElementById("ChangeThemes");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
}
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});

upgrade1.addEventListener("click", function onClick() {
  // клик по 1 улучшению
  if (coins_amount >= priceofupgrade1) {
    audioupgrade.play();
    coins_amount -= priceofupgrade1;
    upgradehave1 += 1;
    onetap_amount += +getfrom1;
    getfrom1 = +((getfrom1 / 100) * 250).toFixed(0);
    if (priceofupgrade1 <= 10000) {
      priceofupgrade1 = +((priceofupgrade1 / 100) * 450).toFixed(0);
    } else {
      priceofupgrade1 = +((priceofupgrade1 / 100) * 750).toFixed(0);
    }
    document.getElementById("nameofupgrade1").innerHTML =
      "+" + toCommaString(getfrom1) + " За тап";
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave1").innerHTML = upgradehave1;
    document.getElementById("priceofupgrade1").innerHTML =
      toCommaString(priceofupgrade1);
  }
});

upgrade2.addEventListener("click", function onClick() {
  // клик по 2 улучшению
  if (coins_amount >= priceofupgrade2) {
    audioupgrade.play();
    coins_amount -= priceofupgrade2;
    upgradehave2 += 1;
    howmuchyougetfrom1 = howmuchyougetfrom1 * 2;
    getfrom2 = getfrom2 * 2;
    priceofupgrade2 = +((priceofupgrade2 / 100) * 500).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave2").innerHTML = upgradehave2;
    document.getElementById("priceofupgrade2").innerHTML =
      toCommaString(priceofupgrade2);
  }
});

upgrade3.addEventListener("click", function onClick() {
  // клик по 3 улучшению
  if (coins_amount >= priceofupgrade3) {
    audioupgrade.play();
    coins_amount -= priceofupgrade3;
    upgradehave3 += 1;
    howmuchyougetfrom2 = howmuchyougetfrom2 * 2;
    getfrom3 = getfrom3 * 2;
    priceofupgrade3 = +((priceofupgrade3 / 100) * 500).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave3").innerHTML = upgradehave3;
    document.getElementById("priceofupgrade3").innerHTML =
      toCommaString(priceofupgrade3);
  }
});

upgrade4.addEventListener("click", function onClick() {
  // клик по 4 улучшению
  if (coins_amount >= priceofupgrade4) {
    audioupgrade.play();
    coins_amount -= priceofupgrade4;
    upgradehave4 += 1;
    howmuchyougetfrom3 = howmuchyougetfrom3 * 2;
    getfrom4 = getfrom4 * 2;
    priceofupgrade4 = +((priceofupgrade4 / 100) * 500).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave4").innerHTML = upgradehave4;
    document.getElementById("priceofupgrade4").innerHTML =
      toCommaString(priceofupgrade4);
  }
});

upgrade5.addEventListener("click", function onClick() {
  // клик по 5 улучшению
  if (coins_amount >= priceofupgrade5) {
    audioupgrade.play();
    coins_amount -= priceofupgrade5;
    upgradehave5 += 1;
    howmuchyougetfrom4 = howmuchyougetfrom4 * 2;
    getfrom5 = getfrom5 * 2;
    priceofupgrade5 = +((priceofupgrade5 / 100) * 500).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave5").innerHTML = upgradehave5;
    document.getElementById("priceofupgrade5").innerHTML =
      toCommaString(priceofupgrade5);
  }
});

upgrade6.addEventListener("click", function onClick() {
  // клик по 6 улучшению
  if (coins_amount >= priceofupgrade6) {
    audioupgrade.play();
    coins_amount -= priceofupgrade6;
    upgradehave6 += 1;
    howmuchyougetfrom5 = howmuchyougetfrom5 * 2;
    getfrom6 = getfrom6 * 2;
    priceofupgrade6 = +((priceofupgrade6 / 100) * 500).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave6").innerHTML = upgradehave6;
    document.getElementById("priceofupgrade6").innerHTML =
      toCommaString(priceofupgrade6);
  }
});

upgrade7.addEventListener("click", function onClick() {
  // клик по 7 улучшению
  if (coins_amount >= priceofupgrade7) {
    audioupgrade.play();
    coins_amount -= priceofupgrade7;
    upgradehave7 += 1;
    howmuchyougetfrom6 = howmuchyougetfrom6 * 2;
    getfrom7 = getfrom7 * 2;
    priceofupgrade7 = +((priceofupgrade7 / 100) * 400).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave7").innerHTML = upgradehave7;
    document.getElementById("priceofupgrade7").innerHTML =
      toCommaString(priceofupgrade7);
  }
});

upgrade8.addEventListener("click", function onClick() {
  // клик по 8 улучшению
  if (coins_amount >= priceofupgrade8) {
    audioupgrade.play();
    coins_amount -= priceofupgrade8;
    upgradehave8 += 1;
    howmuchyougetfrom7 = howmuchyougetfrom7 * 2;
    getfrom8 = getfrom8 * 2;
    priceofupgrade8 = +((priceofupgrade8 / 100) * 300).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave8").innerHTML = upgradehave8;
    document.getElementById("priceofupgrade8").innerHTML =
      toCommaString(priceofupgrade8);
  }
});

upgrade9.addEventListener("click", function onClick() {
  // клик по 9 улучшению
  if (coins_amount >= priceofupgrade9) {
    audioupgrade.play();
    coins_amount -= priceofupgrade9;
    upgradehave9 += 1;
    howmuchyougetfrom8 = howmuchyougetfrom8 * 2;
    getfrom9 = getfrom9 * 2;
    priceofupgrade9 = +((priceofupgrade9 / 100) * 250).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave9").innerHTML = upgradehave9;
    document.getElementById("priceofupgrade9").innerHTML =
      toCommaString(priceofupgrade9);
  }
});

upgrade10.addEventListener("click", function onClick() {
  // клик по 10 улучшению
  if (coins_amount >= priceofupgrade10) {
    audioupgrade.play();
    coins_amount -= priceofupgrade10;
    upgradehave10 += 1;
    howmuchyougetfrom9 = howmuchyougetfrom9 * 2;
    getfrom10 = getfrom10 * 2;
    priceofupgrade10 = +((priceofupgrade10 / 100) * 200).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave10").innerHTML = upgradehave10;
    document.getElementById("priceofupgrade10").innerHTML =
      toCommaString(priceofupgrade10);
  }
});

upgrade11.addEventListener("click", function onClick() {
  // клик по 11 улучшению
  if (coins_amount >= priceofupgrade11) {
    audioupgrade.play();
    coins_amount -= priceofupgrade11;
    upgradehave11 += 1;
    howmuchyougetfrom10 = howmuchyougetfrom10 * 2;
    getfrom11 = getfrom11 * 2;
    priceofupgrade11 = +((priceofupgrade11 / 100) * 200).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave11").innerHTML = upgradehave11;
    document.getElementById("priceofupgrade11").innerHTML =
      toCommaString(priceofupgrade11);
  }
});

upgrade12.addEventListener("click", function onClick() {
  // клик по 11 улучшению
  if (coins_amount >= priceofupgrade12) {
    audioupgrade.play();
    coins_amount -= priceofupgrade12;
    upgradehave12 += 1;
    howmuchyougetfrom11 = howmuchyougetfrom11 * 2;
    getfrom12 = getfrom12 * 2;
    priceofupgrade12 = +((priceofupgrade12 / 100) * 200).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave12").innerHTML = upgradehave12;
    document.getElementById("priceofupgrade12").innerHTML =
      toCommaString(priceofupgrade12);
  }
});

upgrade13.addEventListener("click", function onClick() {
  // клик по 13 улучшению
  if (coins_amount >= priceofupgrade13) {
    audioupgrade.play();
    coins_amount -= priceofupgrade13;
    upgradehave13 += 1;
    howmuchyougetfrom12 = howmuchyougetfrom12 * 2;
    getfrom13 = getfrom13 * 2;
    priceofupgrade13 = +((priceofupgrade13 / 100) * 200).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave13").innerHTML = upgradehave13;
    document.getElementById("priceofupgrade13").innerHTML =
      toCommaString(priceofupgrade13);
  }
});

upgrade14.addEventListener("click", function onClick() {
  // клик по 14 улучшению
  if (coins_amount >= priceofupgrade14) {
    audioupgrade.play();
    coins_amount -= priceofupgrade14;
    upgradehave14 += 1;
    howmuchyougetfrom13 = howmuchyougetfrom13 * 2;
    getfrom14 = getfrom14 * 2;
    priceofupgrade14 = +((priceofupgrade14 / 100) * 200).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave14").innerHTML = upgradehave14;
    document.getElementById("priceofupgrade14").innerHTML =
      toCommaString(priceofupgrade14);
  }
});

upgrade15.addEventListener("click", function onClick() {
  // клик по 14 улучшению
  if (coins_amount >= priceofupgrade15) {
    audioupgrade.play();
    coins_amount -= priceofupgrade15;
    upgradehave15 += 1;
    discount();
    priceofupgrade15 = +(priceofupgrade15 * 100).toFixed(0);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("upgradehave15").innerHTML = upgradehave15;
    document.getElementById("priceofupgrade15").innerHTML =
      toCommaString(priceofupgrade15);
  }
});

document.getElementById("coin").addEventListener("click", function (event) {
  // клик по главной кнопке
  audioclickoncoin.play();
  audioclickoncoin.volume = 0.7;
  coins_amount += onetap_amount;
  allcoinsfromgame += onetap_amount;
  document.getElementById("countofcoins").innerHTML =
    toCommaString(coins_amount);
  createNumberOnClicker(event);
});

firstbuybutton.addEventListener("click", function onClick() {
  // клик по 1 покупочной карте
  if (coins_amount >= newprice(priceoffirstbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceoffirstbutton, howmuchtobuy);
    cpersec += getfrom2 * howmuchtobuy;
    howmuchyougetfrom1 += getfrom2 * howmuchtobuy;
    have1 += howmuchtobuy;
    priceoffirstbutton = chekiiing(priceoffirstbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have1").innerHTML = have1;
    document.getElementById("price1").innerHTML = toCommaString(
      newprice(priceoffirstbutton, howmuchtobuy)
    );
  }
});

secondbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofsecondbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofsecondbutton, howmuchtobuy);
    cpersec += getfrom3 * howmuchtobuy;
    howmuchyougetfrom2 += getfrom3 * howmuchtobuy;
    have2 += howmuchtobuy;
    priceofsecondbutton = chekiiing(priceofsecondbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have2").innerHTML = have2;
    document.getElementById("price2").innerHTML = toCommaString(
      newprice(priceofsecondbutton, howmuchtobuy)
    );
  }
});

thirdbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofthirdbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofthirdbutton, howmuchtobuy);
    cpersec += getfrom4 * howmuchtobuy;
    howmuchyougetfrom3 += getfrom4 * howmuchtobuy;
    have3 += howmuchtobuy;
    priceofthirdbutton = chekiiing(priceofthirdbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have3").innerHTML = have3;
    document.getElementById("price3").innerHTML = toCommaString(
      newprice(priceofthirdbutton, howmuchtobuy)
    );
  }
});

fourbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceoffourbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceoffourbutton, howmuchtobuy);
    cpersec += getfrom5 * howmuchtobuy;
    howmuchyougetfrom4 += getfrom5 * howmuchtobuy;
    have4 += howmuchtobuy;
    priceoffourbutton = chekiiing(priceoffourbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have4").innerHTML = have4;
    document.getElementById("price4").innerHTML = toCommaString(
      newprice(priceoffourbutton, howmuchtobuy)
    );
  }
});

fivebuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceoffivebutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceoffivebutton, howmuchtobuy);
    cpersec += getfrom6 * howmuchtobuy;
    howmuchyougetfrom5 += getfrom6 * howmuchtobuy;
    have5 += howmuchtobuy;
    priceoffivebutton = chekiiing(priceoffivebutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have5").innerHTML = have5;
    document.getElementById("price5").innerHTML = toCommaString(
      newprice(priceoffivebutton, howmuchtobuy)
    );
  }
});

sixbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofsixbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofsixbutton, howmuchtobuy);
    cpersec += getfrom7 * howmuchtobuy;
    howmuchyougetfrom6 += getfrom7 * howmuchtobuy;
    have6 += howmuchtobuy;
    priceofsixbutton = chekiiing(priceofsixbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have6").innerHTML = have6;
    document.getElementById("price6").innerHTML = toCommaString(
      newprice(priceofsixbutton, howmuchtobuy)
    );
  }
});

sevenbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofsevenbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofsevenbutton, howmuchtobuy);
    cpersec += getfrom8 * howmuchtobuy;
    howmuchyougetfrom7 += getfrom8 * howmuchtobuy;
    have7 += howmuchtobuy;
    priceofsevenbutton = chekiiing(priceofsevenbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have7").innerHTML = have7;
    document.getElementById("price7").innerHTML = toCommaString(
      newprice(priceofsevenbutton, howmuchtobuy)
    );
  }
});

eightbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofeightbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofeightbutton, howmuchtobuy);
    cpersec += getfrom9 * howmuchtobuy;
    howmuchyougetfrom8 += getfrom9 * howmuchtobuy;
    have8 += howmuchtobuy;
    priceofeightbutton = chekiiing(priceofeightbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have8").innerHTML = have8;
    document.getElementById("price8").innerHTML = toCommaString(
      newprice(priceofeightbutton, howmuchtobuy)
    );
  }
});

ninebuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofninebutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofninebutton, howmuchtobuy);
    cpersec += getfrom10 * howmuchtobuy;
    howmuchyougetfrom9 += getfrom10 * howmuchtobuy;
    have9 += howmuchtobuy;
    priceofninebutton = chekiiing(priceofninebutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have9").innerHTML = have9;
    document.getElementById("price9").innerHTML = toCommaString(
      newprice(priceofninebutton, howmuchtobuy)
    );
  }
});

tenbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceoftenbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceoftenbutton, howmuchtobuy);
    cpersec += getfrom11 * howmuchtobuy;
    howmuchyougetfrom10 += getfrom11 * howmuchtobuy;
    have10 += howmuchtobuy;
    priceoftenbutton = chekiiing(priceoftenbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have10").innerHTML = have10;
    document.getElementById("price10").innerHTML = toCommaString(
      newprice(priceoftenbutton, howmuchtobuy)
    );
  }
});

elevenbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofelevenbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofelevenbutton, howmuchtobuy);
    cpersec += getfrom12 * howmuchtobuy;
    howmuchyougetfrom11 += getfrom12 * howmuchtobuy;
    have11 += howmuchtobuy;
    priceofelevenbutton = chekiiing(priceofelevenbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have11").innerHTML = have11;
    document.getElementById("price11").innerHTML = toCommaString(
      newprice(priceofelevenbutton, howmuchtobuy)
    );
  }
});

twelvebuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceoftwelvebutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceoftwelvebutton, howmuchtobuy);
    cpersec += getfrom13 * howmuchtobuy;
    howmuchyougetfrom12 += getfrom13 * howmuchtobuy;
    have12 += howmuchtobuy;
    priceoftwelvebutton = chekiiing(priceoftwelvebutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have12").innerHTML = have12;
    document.getElementById("price12").innerHTML = toCommaString(
      newprice(priceoftwelvebutton, howmuchtobuy)
    );
  }
});

thirteenbuybutton.addEventListener("click", function onClick() {
  // клик по 2 покупочной карте
  if (coins_amount >= newprice(priceofthirteenbutton, howmuchtobuy)) {
    audioclickonbuybutton.play();
    coins_amount -= newprice(priceofthirteenbutton, howmuchtobuy);
    cpersec += getfrom14 * howmuchtobuy;
    howmuchyougetfrom13 += getfrom14 * howmuchtobuy;
    have13 += howmuchtobuy;
    priceofthirteenbutton = chekiiing(priceofthirteenbutton, howmuchtobuy);
    document.getElementById("countofcoins").innerHTML =
      toCommaString(coins_amount);
    document.getElementById("have13").innerHTML = have13;
    document.getElementById("price13").innerHTML = toCommaString(
      newprice(priceofthirteenbutton, howmuchtobuy)
    );
  }
});

setInterval(() => {
  //интервал на чек разблокировки кнопок
  function checkIntervalBuyButton(price,buy){
    coins_amount >= newprice(price, howmuchtobuy) ? document.getElementById(`${buy}`).disabled = false : document.getElementById(`${buy}`).disabled = true
  }

  function checkIntervalBuyUpgrade (price, buy) {
    coins_amount >= price ? document.getElementById(`${buy}`).disabled = false : document.getElementById(`${buy}`).disabled = true;
  }

  checkIntervalBuyButton(priceoffirstbutton, "buy1")
  checkIntervalBuyButton(priceofsecondbutton, "buy2")
  checkIntervalBuyButton(priceofthirdbutton, "buy3")
  checkIntervalBuyButton(priceoffourbutton, "buy4")
  checkIntervalBuyButton(priceoffivebutton, "buy5")
  checkIntervalBuyButton(priceofsixbutton, "buy6")
  checkIntervalBuyButton(priceofsevenbutton, "buy7")
  checkIntervalBuyButton(priceofeightbutton, "buy8")
  checkIntervalBuyButton(priceofninebutton, "buy9")
  checkIntervalBuyButton(priceoftenbutton, "buy10")
  checkIntervalBuyButton(priceofelevenbutton, "buy11")
  checkIntervalBuyButton(priceoftwelvebutton, "buy12")
  checkIntervalBuyButton(priceofthirteenbutton, "buy13")

  checkIntervalBuyUpgrade(priceofupgrade1, "upgrade1")
  checkIntervalBuyUpgrade(priceofupgrade2, "upgrade2")
  checkIntervalBuyUpgrade(priceofupgrade3, "upgrade3")
  checkIntervalBuyUpgrade(priceofupgrade4, "upgrade4")
  checkIntervalBuyUpgrade(priceofupgrade5, "upgrade5")
  checkIntervalBuyUpgrade(priceofupgrade6, "upgrade6")
  checkIntervalBuyUpgrade(priceofupgrade7, "upgrade7")
  checkIntervalBuyUpgrade(priceofupgrade8, "upgrade8")
  checkIntervalBuyUpgrade(priceofupgrade9, "upgrade9")
  checkIntervalBuyUpgrade(priceofupgrade10, "upgrade10")
  checkIntervalBuyUpgrade(priceofupgrade11, "upgrade11")
  checkIntervalBuyUpgrade(priceofupgrade12, "upgrade12")
  checkIntervalBuyUpgrade(priceofupgrade13, "upgrade13")
  checkIntervalBuyUpgrade(priceofupgrade14, "upgrade14")
  checkIntervalBuyUpgrade(priceofupgrade15, "upgrade15")

  document.title = "Монеты: " + toCommaString(coins_amount) + " - Coin clicker";
}, 250);

function saveGame() {
  //функция для сохранения
  var gameSave = {
    coins_amount: coins_amount,
    onetap_amount: onetap_amount,
    cpersec: cpersec,
    have1: have1,
    priceoffirstbutton: priceoffirstbutton,
    have2: have2,
    priceofsecondbutton: priceofsecondbutton,
    have3: have3,
    priceofthirdbutton: priceofthirdbutton,
    have4: have4,
    priceoffourbutton: priceoffourbutton,
    have5: have5,
    priceoffivebutton: priceoffivebutton,
    have6: have6,
    priceofsixbutton: priceofsixbutton,
    have7: have7,
    priceofsevenbutton: priceofsevenbutton,
    have8: have8,
    priceofeightbutton: priceofeightbutton,
    have9: have9,
    priceofninebutton: priceofninebutton,
    have10: have10,
    priceoftenbutton: priceoftenbutton,
    have11: have11,
    priceofelevenbutton: priceofelevenbutton,
    have12: have12,
    priceoftwelvebutton: priceoftwelvebutton,
    have13: have13,
    priceofthirteenbutton: priceofthirteenbutton,
    upgradehave1: upgradehave1,
    priceofupgrade1: priceofupgrade1,
    getfrom1: getfrom1,
    upgradehave2: upgradehave2,
    priceofupgrade2: priceofupgrade2,
    getfrom2: getfrom2,
    upgradehave3: upgradehave3,
    priceofupgrade3: priceofupgrade3,
    getfrom3: getfrom3,
    upgradehave4: upgradehave4,
    priceofupgrade4: priceofupgrade4,
    getfrom4: getfrom4,
    upgradehave5: upgradehave5,
    priceofupgrade5: priceofupgrade5,
    getfrom5: getfrom5,
    upgradehave6: upgradehave6,
    priceofupgrade6: priceofupgrade6,
    getfrom6: getfrom6,
    upgradehave7: upgradehave7,
    priceofupgrade7: priceofupgrade7,
    getfrom7: getfrom7,
    upgradehave8: upgradehave8,
    priceofupgrade8: priceofupgrade8,
    getfrom8: getfrom8,
    upgradehave9: upgradehave9,
    priceofupgrade9: priceofupgrade9,
    getfrom9: getfrom9,
    upgradehave10: upgradehave10,
    priceofupgrade10: priceofupgrade10,
    getfrom10: getfrom10,
    upgradehave11: upgradehave11,
    priceofupgrade11: priceofupgrade11,
    getfrom11: getfrom11,
    upgradehave12: upgradehave12,
    priceofupgrade12: priceofupgrade12,
    getfrom12: getfrom12,
    upgradehave13: upgradehave13,
    priceofupgrade13: priceofupgrade13,
    getfrom13: getfrom13,
    upgradehave14: upgradehave14,
    priceofupgrade14: priceofupgrade14,
    getfrom14: getfrom14,
    upgradehave15: upgradehave15,
    priceofupgrade15: priceofupgrade15,
    howmuchyougetfrom1: howmuchyougetfrom1,
    howmuchyougetfrom2: howmuchyougetfrom2,
    howmuchyougetfrom3: howmuchyougetfrom3,
    howmuchyougetfrom4: howmuchyougetfrom4,
    howmuchyougetfrom5: howmuchyougetfrom5,
    howmuchyougetfrom6: howmuchyougetfrom6,
    howmuchyougetfrom7: howmuchyougetfrom7,
    howmuchyougetfrom8: howmuchyougetfrom8,
    howmuchyougetfrom9: howmuchyougetfrom9,
    howmuchyougetfrom10: howmuchyougetfrom10,
    howmuchyougetfrom11: howmuchyougetfrom11,
    howmuchyougetfrom12: howmuchyougetfrom12,
    howmuchyougetfrom13: howmuchyougetfrom13,
    allcoinsfromgame: allcoinsfromgame,
    prestigelvl: prestigelvl,
    progresscoins: progresscoins,
    achievementdone1: achievementdone1,
    achievementdone2: achievementdone2,
    achievementdone3: achievementdone3,
    achievementdone4: achievementdone4,
    achievementdone5: achievementdone5,
    achievementdone6: achievementdone6,
    achievementdone7: achievementdone7,
    achievementdone8: achievementdone8,
    achievementdone9: achievementdone9,
    achievementdone10: achievementdone10,
    achievementdone11: achievementdone11,
    achievementdone12: achievementdone12,
    achievementdone13: achievementdone13,
    achievementdone14: achievementdone14,
    achievementdone15: achievementdone15,
    achievementdone16: achievementdone16,
    achievementdone17: achievementdone17,
    achievementdone18: achievementdone18,
    achievementdone19: achievementdone19,
    achievementdone20: achievementdone20,
    achievementdone21: achievementdone21,
    achievementdone22: achievementdone22,
    achievementdone23: achievementdone23,
    achievementdone24: achievementdone24,
    achievementdone25: achievementdone25,
    achievementdone26: achievementdone26,
    achievementdone27: achievementdone27,
    achievementdone28: achievementdone28,
    achievementdone29: achievementdone29,
    achievementdone30: achievementdone30,
    achievementdone31: achievementdone31,
    achievementdone32: achievementdone32,
    achievementdone33: achievementdone33,
    achievementdone34: achievementdone34,
    achievementdone35: achievementdone35,
    achievementdone36: achievementdone36,
    achievementdone37: achievementdone37,
    achievementdone38: achievementdone38,
    achievementdone39: achievementdone39,
    achievementdone40: achievementdone40,
    achievementdone41: achievementdone41,
    achievementdone42: achievementdone42,
    achievementdone43: achievementdone43,
    achievementdone44: achievementdone44,
    achievementdone45: achievementdone45,
    achievementdone46: achievementdone46,
    achievementdone47: achievementdone47,
    achievementdone48: achievementdone48,
    achievementdone49: achievementdone49,
    achievementdone50: achievementdone50,
    achievementdone51: achievementdone51,
    achievementdone52: achievementdone52,
    achievementdone53: achievementdone53,
    achievementdone54: achievementdone54,
    achievementdone55: achievementdone55,
    achievementdone56: achievementdone56,
    achievementdone57: achievementdone57,
    achievementdone58: achievementdone58,
    achievementdone59: achievementdone59,
    achievementdone60: achievementdone60,
    achievementdone61: achievementdone61,
    achievementdone62: achievementdone62,
    achievementdone63: achievementdone63,
    achievementdone64: achievementdone64,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  //функция для загрузки
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.progresscoins !== "undefined")
    progresscoins = savedGame.progresscoins;
  if (typeof savedGame.allcoinsfromgame !== "undefined")
    allcoinsfromgame = savedGame.allcoinsfromgame;
  if (typeof savedGame.coins_amount !== "undefined")
    coins_amount = savedGame.coins_amount;
  if (typeof savedGame.onetap_amount !== "undefined")
    onetap_amount = savedGame.onetap_amount;
  if (typeof savedGame.cpersec !== "undefined") cpersec = savedGame.cpersec;
  if (typeof savedGame.have1 !== "undefined") have1 = savedGame.have1;
  if (typeof savedGame.priceoffirstbutton !== "undefined")
    priceoffirstbutton = savedGame.priceoffirstbutton;
  if (typeof savedGame.have2 !== "undefined") have2 = savedGame.have2;
  if (typeof savedGame.priceofsecondbutton !== "undefined")
    priceofsecondbutton = savedGame.priceofsecondbutton;
  if (typeof savedGame.have3 !== "undefined") have3 = savedGame.have3;
  if (typeof savedGame.priceofthirdbutton !== "undefined")
    priceofthirdbutton = savedGame.priceofthirdbutton;
  if (typeof savedGame.have4 !== "undefined") have4 = savedGame.have4;
  if (typeof savedGame.priceoffourbutton !== "undefined")
    priceoffourbutton = savedGame.priceoffourbutton;
  if (typeof savedGame.have5 !== "undefined") have5 = savedGame.have5;
  if (typeof savedGame.priceoffivebutton !== "undefined")
    priceoffivebutton = savedGame.priceoffivebutton;
  if (typeof savedGame.have6 !== "undefined") have6 = savedGame.have6;
  if (typeof savedGame.priceofsixbutton !== "undefined")
    priceofsixbutton = savedGame.priceofsixbutton;
  if (typeof savedGame.have7 !== "undefined") have7 = savedGame.have7;
  if (typeof savedGame.priceofsevenbutton !== "undefined")
    priceofsevenbutton = savedGame.priceofsevenbutton;
  if (typeof savedGame.have8 !== "undefined") have8 = savedGame.have8;
  if (typeof savedGame.priceofeightbutton !== "undefined")
    priceofeightbutton = savedGame.priceofeightbutton;
  if (typeof savedGame.have9 !== "undefined") have9 = savedGame.have9;
  if (typeof savedGame.priceofninebutton !== "undefined")
    priceofninebutton = savedGame.priceofninebutton;
  if (typeof savedGame.have10 !== "undefined") have10 = savedGame.have10;
  if (typeof savedGame.have11 !== "undefined") have11 = savedGame.have11;
  if (typeof savedGame.have12 !== "undefined") have12 = savedGame.have12;
  if (typeof savedGame.have13 !== "undefined") have13 = savedGame.have13;
  if (typeof savedGame.priceoftenbutton !== "undefined")
    priceoftenbutton = savedGame.priceoftenbutton;
  if (typeof savedGame.priceofelevenbutton !== "undefined")
    priceofelevenbutton = savedGame.priceofelevenbutton;
  if (typeof savedGame.priceoftwelvebutton !== "undefined")
    priceoftwelvebutton = savedGame.priceoftwelvebutton;
  if (typeof savedGame.priceofthirteenbutton !== "undefined")
    priceofthirteenbutton = savedGame.priceofthirteenbutton;
  if (typeof savedGame.upgradehave1 !== "undefined")
    upgradehave1 = savedGame.upgradehave1;
  if (typeof savedGame.priceofupgrade1 !== "undefined")
    priceofupgrade1 = savedGame.priceofupgrade1;
  if (typeof savedGame.getfrom1 !== "undefined") getfrom1 = savedGame.getfrom1;
  if (typeof savedGame.upgradehave2 !== "undefined")
    upgradehave2 = savedGame.upgradehave2;
  if (typeof savedGame.priceofupgrade2 !== "undefined")
    priceofupgrade2 = savedGame.priceofupgrade2;
  if (typeof savedGame.getfrom2 !== "undefined") getfrom2 = savedGame.getfrom2;
  if (typeof savedGame.upgradehave3 !== "undefined")
    upgradehave3 = savedGame.upgradehave3;
  if (typeof savedGame.priceofupgrade3 !== "undefined")
    priceofupgrade3 = savedGame.priceofupgrade3;
  if (typeof savedGame.getfrom3 !== "undefined") getfrom3 = savedGame.getfrom3;
  if (typeof savedGame.upgradehave4 !== "undefined")
    upgradehave4 = savedGame.upgradehave4;
  if (typeof savedGame.priceofupgrade4 !== "undefined")
    priceofupgrade4 = savedGame.priceofupgrade4;
  if (typeof savedGame.getfrom4 !== "undefined") getfrom4 = savedGame.getfrom4;
  if (typeof savedGame.upgradehave5 !== "undefined")
    upgradehave5 = savedGame.upgradehave5;
  if (typeof savedGame.priceofupgrade5 !== "undefined")
    priceofupgrade5 = savedGame.priceofupgrade5;
  if (typeof savedGame.getfrom5 !== "undefined") getfrom5 = savedGame.getfrom5;
  if (typeof savedGame.upgradehave6 !== "undefined")
    upgradehave6 = savedGame.upgradehave6;
  if (typeof savedGame.priceofupgrade6 !== "undefined")
    priceofupgrade6 = savedGame.priceofupgrade6;
  if (typeof savedGame.getfrom6 !== "undefined") getfrom6 = savedGame.getfrom6;
  if (typeof savedGame.upgradehave7 !== "undefined")
    upgradehave7 = savedGame.upgradehave7;
  if (typeof savedGame.priceofupgrade7 !== "undefined")
    priceofupgrade7 = savedGame.priceofupgrade7;
  if (typeof savedGame.getfrom7 !== "undefined") getfrom7 = savedGame.getfrom7;
  if (typeof savedGame.upgradehave8 !== "undefined")
    upgradehave8 = savedGame.upgradehave8;
  if (typeof savedGame.priceofupgrade8 !== "undefined")
    priceofupgrade8 = savedGame.priceofupgrade8;
  if (typeof savedGame.getfrom8 !== "undefined") getfrom8 = savedGame.getfrom8;
  if (typeof savedGame.upgradehave9 !== "undefined")
    upgradehave9 = savedGame.upgradehave9;
  if (typeof savedGame.priceofupgrade9 !== "undefined")
    priceofupgrade9 = savedGame.priceofupgrade9;
  if (typeof savedGame.getfrom9 !== "undefined") getfrom9 = savedGame.getfrom9;
  if (typeof savedGame.upgradehave10 !== "undefined")
    upgradehave10 = savedGame.upgradehave10;
  if (typeof savedGame.priceofupgrade10 !== "undefined")
    priceofupgrade10 = savedGame.priceofupgrade10;
  if (typeof savedGame.getfrom10 !== "undefined")
    getfrom10 = savedGame.getfrom10;
  if (typeof savedGame.upgradehave11 !== "undefined")
    upgradehave11 = savedGame.upgradehave11;
  if (typeof savedGame.priceofupgrade11 !== "undefined")
    priceofupgrade11 = savedGame.priceofupgrade11;
  if (typeof savedGame.getfrom11 !== "undefined")
    getfrom11 = savedGame.getfrom11;
  if (typeof savedGame.getfrom12 !== "undefined")
    getfrom12 = savedGame.getfrom12;
  if (typeof savedGame.upgradehave12 !== "undefined")
    upgradehave12 = savedGame.upgradehave12;
  if (typeof savedGame.priceofupgrade12 !== "undefined")
    priceofupgrade12 = savedGame.priceofupgrade12;
  if (typeof savedGame.getfrom13 !== "undefined")
    getfrom13 = savedGame.getfrom13;
  if (typeof savedGame.upgradehave13 !== "undefined")
    upgradehave13 = savedGame.upgradehave13;
  if (typeof savedGame.priceofupgrade13 !== "undefined")
    priceofupgrade13 = savedGame.priceofupgrade13;
  if (typeof savedGame.getfrom14 !== "undefined")
    getfrom14 = savedGame.getfrom14;
  if (typeof savedGame.upgradehave14 !== "undefined")
    upgradehave14 = savedGame.upgradehave14;
  if (typeof savedGame.priceofupgrade14 !== "undefined")
    priceofupgrade14 = savedGame.priceofupgrade14;
  if (typeof savedGame.upgradehave15 !== "undefined")
    upgradehave15 = savedGame.upgradehave15;
  if (typeof savedGame.priceofupgrade15 !== "undefined")
    priceofupgrade15 = savedGame.priceofupgrade15;
  if (typeof savedGame.howmuchyougetfrom1 !== "undefined")
    howmuchyougetfrom1 = savedGame.howmuchyougetfrom1;
  if (typeof savedGame.howmuchyougetfrom2 !== "undefined")
    howmuchyougetfrom2 = savedGame.howmuchyougetfrom2;
  if (typeof savedGame.howmuchyougetfrom3 !== "undefined")
    howmuchyougetfrom3 = savedGame.howmuchyougetfrom3;
  if (typeof savedGame.howmuchyougetfrom4 !== "undefined")
    howmuchyougetfrom4 = savedGame.howmuchyougetfrom4;
  if (typeof savedGame.howmuchyougetfrom5 !== "undefined")
    howmuchyougetfrom5 = savedGame.howmuchyougetfrom5;
  if (typeof savedGame.howmuchyougetfrom6 !== "undefined")
    howmuchyougetfrom6 = savedGame.howmuchyougetfrom6;
  if (typeof savedGame.howmuchyougetfrom7 !== "undefined")
    howmuchyougetfrom7 = savedGame.howmuchyougetfrom7;
  if (typeof savedGame.howmuchyougetfrom8 !== "undefined")
    howmuchyougetfrom8 = savedGame.howmuchyougetfrom8;
  if (typeof savedGame.howmuchyougetfrom9 !== "undefined")
    howmuchyougetfrom9 = savedGame.howmuchyougetfrom9;
  if (typeof savedGame.howmuchyougetfrom10 !== "undefined")
    howmuchyougetfrom10 = savedGame.howmuchyougetfrom10;
  if (typeof savedGame.howmuchyougetfrom11 !== "undefined")
    howmuchyougetfrom11 = savedGame.howmuchyougetfrom11;
  if (typeof savedGame.howmuchyougetfrom12 !== "undefined")
    howmuchyougetfrom12 = savedGame.howmuchyougetfrom12;
  if (typeof savedGame.howmuchyougetfrom13 !== "undefined")
    howmuchyougetfrom13 = savedGame.howmuchyougetfrom13;
  if (typeof savedGame.prestigelvl !== "undefined")
    prestigelvl = savedGame.prestigelvl;
  if (typeof savedGame.achievementdone1 !== "undefined")
    achievementdone1 = savedGame.achievementdone1;
  if (typeof savedGame.achievementdone2 !== "undefined")
    achievementdone2 = savedGame.achievementdone2;
  if (typeof savedGame.achievementdone3 !== "undefined")
    achievementdone3 = savedGame.achievementdone3;
  if (typeof savedGame.achievementdone4 !== "undefined")
    achievementdone4 = savedGame.achievementdone4;
  if (typeof savedGame.achievementdone5 !== "undefined")
    achievementdone5 = savedGame.achievementdone5;
  if (typeof savedGame.achievementdone6 !== "undefined")
    achievementdone6 = savedGame.achievementdone6;
  if (typeof savedGame.achievementdone7 !== "undefined")
    achievementdone7 = savedGame.achievementdone7;
  if (typeof savedGame.achievementdone8 !== "undefined")
    achievementdone8 = savedGame.achievementdone8;
  if (typeof savedGame.achievementdone9 !== "undefined")
    achievementdone9 = savedGame.achievementdone9;
  if (typeof savedGame.achievementdone10 !== "undefined")
    achievementdone10 = savedGame.achievementdone10;
  if (typeof savedGame.achievementdone11 !== "undefined")
    achievementdone11 = savedGame.achievementdone11;
  if (typeof savedGame.achievementdone12 !== "undefined")
    achievementdone12 = savedGame.achievementdone12;
  if (typeof savedGame.achievementdone13 !== "undefined")
    achievementdone13 = savedGame.achievementdone13;
  if (typeof savedGame.achievementdone14 !== "undefined")
    achievementdone14 = savedGame.achievementdone14;
  if (typeof savedGame.achievementdone15 !== "undefined")
    achievementdone15 = savedGame.achievementdone15;
  if (typeof savedGame.achievementdone16 !== "undefined")
    achievementdone16 = savedGame.achievementdone16;
  if (typeof savedGame.achievementdone17 !== "undefined")
    achievementdone17 = savedGame.achievementdone17;
  if (typeof savedGame.achievementdone18 !== "undefined")
    achievementdone18 = savedGame.achievementdone18;
  if (typeof savedGame.achievementdone19 !== "undefined")
    achievementdone19 = savedGame.achievementdone19;
  if (typeof savedGame.achievementdone20 !== "undefined")
    achievementdone20 = savedGame.achievementdone20;
  if (typeof savedGame.achievementdone21 !== "undefined")
    achievementdone21 = savedGame.achievementdone21;
  if (typeof savedGame.achievementdone22 !== "undefined")
    achievementdone22 = savedGame.achievementdone22;
  if (typeof savedGame.achievementdone23 !== "undefined")
    achievementdone23 = savedGame.achievementdone23;
  if (typeof savedGame.achievementdone24 !== "undefined")
    achievementdone24 = savedGame.achievementdone24;
  if (typeof savedGame.achievementdone25 !== "undefined")
    achievementdone25 = savedGame.achievementdone25;
  if (typeof savedGame.achievementdone26 !== "undefined")
    achievementdone26 = savedGame.achievementdone26;
  if (typeof savedGame.achievementdone27 !== "undefined")
    achievementdone27 = savedGame.achievementdone27;
  if (typeof savedGame.achievementdone28 !== "undefined")
    achievementdone28 = savedGame.achievementdone28;
  if (typeof savedGame.achievementdone29 !== "undefined")
    achievementdone29 = savedGame.achievementdone29;
  if (typeof savedGame.achievementdone30 !== "undefined")
    achievementdone30 = savedGame.achievementdone30;
  if (typeof savedGame.achievementdone31 !== "undefined")
    achievementdone31 = savedGame.achievementdone31;
  if (typeof savedGame.achievementdone32 !== "undefined")
    achievementdone32 = savedGame.achievementdone32;
  if (typeof savedGame.achievementdone33 !== "undefined")
    achievementdone33 = savedGame.achievementdone33;
  if (typeof savedGame.achievementdone34 !== "undefined")
    achievementdone34 = savedGame.achievementdone34;
  if (typeof savedGame.achievementdone35 !== "undefined")
    achievementdone35 = savedGame.achievementdone35;
  if (typeof savedGame.achievementdone36 !== "undefined")
    achievementdone36 = savedGame.achievementdone36;
  if (typeof savedGame.achievementdone37 !== "undefined")
    achievementdone37 = savedGame.achievementdone37;
  if (typeof savedGame.achievementdone38 !== "undefined")
    achievementdone38 = savedGame.achievementdone38;
  if (typeof savedGame.achievementdone39 !== "undefined")
    achievementdone39 = savedGame.achievementdone39;
  if (typeof savedGame.achievementdone40 !== "undefined")
    achievementdone40 = savedGame.achievementdone40;
  if (typeof savedGame.achievementdone41 !== "undefined")
    achievementdone41 = savedGame.achievementdone41;
  if (typeof savedGame.achievementdone42 !== "undefined")
    achievementdone42 = savedGame.achievementdone42;
  if (typeof savedGame.achievementdone43 !== "undefined")
    achievementdone43 = savedGame.achievementdone43;
  if (typeof savedGame.achievementdone44 !== "undefined")
    achievementdone44 = savedGame.achievementdone44;
  if (typeof savedGame.achievementdone45 !== "undefined")
    achievementdone45 = savedGame.achievementdone45;
  if (typeof savedGame.achievementdone46 !== "undefined")
    achievementdone46 = savedGame.achievementdone46;
  if (typeof savedGame.achievementdone47 !== "undefined")
    achievementdone47 = savedGame.achievementdone47;
  if (typeof savedGame.achievementdone48 !== "undefined")
    achievementdone48 = savedGame.achievementdone48;
  if (typeof savedGame.achievementdone49 !== "undefined")
    achievementdone49 = savedGame.achievementdone49;
  if (typeof savedGame.achievementdone50 !== "undefined")
    achievementdone50 = savedGame.achievementdone50;
  if (typeof savedGame.achievementdone51 !== "undefined")
    achievementdone51 = savedGame.achievementdone51;
  if (typeof savedGame.achievementdone52 !== "undefined")
    achievementdone52 = savedGame.achievementdone52;
  if (typeof savedGame.achievementdone53 !== "undefined")
    achievementdone53 = savedGame.achievementdone53;
  if (typeof savedGame.achievementdone54 !== "undefined")
    achievementdone54 = savedGame.achievementdone54;
  if (typeof savedGame.achievementdone55 !== "undefined")
    achievementdone55 = savedGame.achievementdone55;
  if (typeof savedGame.achievementdone56 !== "undefined")
    achievementdone56 = savedGame.achievementdone56;
  if (typeof savedGame.achievementdone57 !== "undefined")
    achievementdone57 = savedGame.achievementdone57;
  if (typeof savedGame.achievementdone58 !== "undefined")
    achievementdone58 = savedGame.achievementdone58;
  if (typeof savedGame.achievementdone59 !== "undefined")
    achievementdone59 = savedGame.achievementdone59;
  if (typeof savedGame.achievementdone60 !== "undefined")
    achievementdone60 = savedGame.achievementdone60;
  if (typeof savedGame.achievementdone61 !== "undefined")
    achievementdone61 = savedGame.achievementdone61;
  if (typeof savedGame.achievementdone62 !== "undefined")
    achievementdone62 = savedGame.achievementdone62;
  if (typeof savedGame.achievementdone63 !== "undefined")
    achievementdone63 = savedGame.achievementdone63;
  if (typeof savedGame.achievementdone64 !== "undefined")
    achievementdone64 = savedGame.achievementdone64;
  document.getElementById("buttonPrestige").innerHTML =
    "Престиж " +
    prestigelvl +
    " уровня" +
    '<div class="progressbar"><span id="progresspercent" style="width: 0%"></span></div>';
  document.getElementById("countofcoins").innerText =
    toCommaString(coins_amount);
  document.getElementById("onesec").innerText = toCommaString(cpersec);
  document.getElementById("have1").innerText = have1;
  document.getElementById("price1").innerText =
    toCommaString(priceoffirstbutton);
  document.getElementById("have2").innerText = have2;
  document.getElementById("price2").innerText =
    toCommaString(priceofsecondbutton);
  document.getElementById("have3").innerText = have3;
  document.getElementById("price3").innerText =
    toCommaString(priceofthirdbutton);
  document.getElementById("have4").innerText = have4;
  document.getElementById("price4").innerText =
    toCommaString(priceoffourbutton);
  document.getElementById("have5").innerText = have5;
  document.getElementById("price5").innerText =
    toCommaString(priceoffivebutton);
  document.getElementById("have6").innerText = have6;
  document.getElementById("price6").innerText = toCommaString(priceofsixbutton);
  document.getElementById("have7").innerText = have7;
  document.getElementById("price7").innerText =
    toCommaString(priceofsevenbutton);
  document.getElementById("have8").innerText = have8;
  document.getElementById("price8").innerText =
    toCommaString(priceofeightbutton);
  document.getElementById("have9").innerText = have9;
  document.getElementById("price9").innerText =
    toCommaString(priceofninebutton);
  document.getElementById("have10").innerText = have10;
  document.getElementById("price10").innerText =
    toCommaString(priceoftenbutton);
  document.getElementById("have11").innerText = have11;
  document.getElementById("price11").innerText =
    toCommaString(priceofelevenbutton);
  document.getElementById("have12").innerText = have12;
  document.getElementById("price12").innerText =
    toCommaString(priceoftwelvebutton);
  document.getElementById("have13").innerText = have13;
  document.getElementById("price13").innerText = toCommaString(
    priceofthirteenbutton
  );
  if (document.getElementById("nameofupgrade1eng") == null) {
    document.getElementById("nameofupgrade1").innerHTML =
      "+" + getfrom1 + " За тап";
  }
  document.getElementById("priceofupgrade1").innerText =
    toCommaString(priceofupgrade1);
  document.getElementById("upgradehave1").innerText = upgradehave1;
  document.getElementById("priceofupgrade2").innerText =
    toCommaString(priceofupgrade2);
  document.getElementById("upgradehave2").innerText = upgradehave2;
  document.getElementById("priceofupgrade3").innerText =
    toCommaString(priceofupgrade3);
  document.getElementById("upgradehave3").innerText = upgradehave3;
  document.getElementById("priceofupgrade4").innerText =
    toCommaString(priceofupgrade4);
  document.getElementById("upgradehave4").innerText = upgradehave4;
  document.getElementById("priceofupgrade5").innerText =
    toCommaString(priceofupgrade5);
  document.getElementById("upgradehave5").innerText = upgradehave5;
  document.getElementById("priceofupgrade6").innerText =
    toCommaString(priceofupgrade6);
  document.getElementById("upgradehave6").innerText = upgradehave6;
  document.getElementById("priceofupgrade7").innerText =
    toCommaString(priceofupgrade7);
  document.getElementById("upgradehave7").innerText = upgradehave7;
  document.getElementById("priceofupgrade8").innerText =
    toCommaString(priceofupgrade8);
  document.getElementById("upgradehave8").innerText = upgradehave8;
  document.getElementById("priceofupgrade9").innerText =
    toCommaString(priceofupgrade9);
  document.getElementById("upgradehave9").innerText = upgradehave9;
  document.getElementById("priceofupgrade10").innerText =
    toCommaString(priceofupgrade10);
  document.getElementById("upgradehave10").innerText = upgradehave10;
  document.getElementById("priceofupgrade11").innerText =
    toCommaString(priceofupgrade11);
  document.getElementById("upgradehave11").innerText = upgradehave11;
  document.getElementById("priceofupgrade12").innerText =
    toCommaString(priceofupgrade12);
  document.getElementById("upgradehave12").innerText = upgradehave12;
  document.getElementById("priceofupgrade13").innerText =
    toCommaString(priceofupgrade13);
  document.getElementById("upgradehave13").innerText = upgradehave13;
  document.getElementById("priceofupgrade14").innerText =
    toCommaString(priceofupgrade14);
  document.getElementById("upgradehave14").innerText = upgradehave14;
  document.getElementById("priceofupgrade15").innerText =
    toCommaString(priceofupgrade15);
  document.getElementById("upgradehave15").innerText = upgradehave15;
}

setInterval(() => {
  //интервал каждую сек +пассив доход
  coins_amount +=
    howmuchyougetfrom1 +
    howmuchyougetfrom2 +
    howmuchyougetfrom3 +
    howmuchyougetfrom4 +
    howmuchyougetfrom5 +
    howmuchyougetfrom6 +
    howmuchyougetfrom7 +
    howmuchyougetfrom8 +
    howmuchyougetfrom9 +
    howmuchyougetfrom10 +
    howmuchyougetfrom11 +
    howmuchyougetfrom12 +
    howmuchyougetfrom13;
  allcoinsfromgame =
    allcoinsfromgame +
    howmuchyougetfrom1 +
    howmuchyougetfrom2 +
    howmuchyougetfrom3 +
    howmuchyougetfrom4 +
    howmuchyougetfrom5 +
    howmuchyougetfrom6 +
    howmuchyougetfrom7 +
    howmuchyougetfrom8 +
    howmuchyougetfrom9 +
    howmuchyougetfrom10 +
    howmuchyougetfrom11 +
    howmuchyougetfrom12 +
    howmuchyougetfrom13;
  document.getElementById("countofcoins").innerHTML =
    toCommaString(coins_amount);
  document.getElementById("onesec").innerHTML = toCommaString(
    howmuchyougetfrom1 +
      howmuchyougetfrom2 +
      howmuchyougetfrom3 +
      howmuchyougetfrom4 +
      howmuchyougetfrom5 +
      howmuchyougetfrom6 +
      howmuchyougetfrom7 +
      howmuchyougetfrom8 +
      howmuchyougetfrom9 +
      howmuchyougetfrom10 +
      howmuchyougetfrom11 +
      howmuchyougetfrom12 +
      howmuchyougetfrom13
  );
}, 1000);

resetbutton.addEventListener("click", function onClick() {
  //кнопка сброса
  localStorage.clear("gameSave");
  reset();
  prestigelvl = 0;
  progresscoins = 1.0e10;
  location.reload();
});

resetach.addEventListener("click", function onClick() {
  //сброс ачивок

  for (let i = 1; i <= 65; i++) {
    let variableName = "achievementdone" + i;
    eval(variableName + " = 0;");
  }

  location.reload()
});

window.onbeforeunload = function (e) {
  //сохранение при выходе
  saveGame();
};

function toCommaString(numbertobignumber) {
  //сокращение числа
  numbertobignumber = +numbertobignumber;
  if (numbertobignumber >= 1.0e6) {
    if (numbertobignumber >= 1.0e6 && numbertobignumber < 1.0e9) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e6).toFixed(2) + " " + "M"
      );
    } else if (numbertobignumber >= 1.0e9 && numbertobignumber < 1.0e12) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e9).toFixed(2) + " " + "B"
      );
    } else if (numbertobignumber >= 1.0e12 && numbertobignumber < 1.0e15) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e12).toFixed(2) + " " + "t"
      );
    } else if (numbertobignumber >= 1.0e15 && numbertobignumber < 1.0e18) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e15).toFixed(2) + " " + "q"
      );
    } else if (numbertobignumber >= 1.0e18 && numbertobignumber < 1.0e21) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e18).toFixed(2) + " " + "Q"
      );
    } else if (numbertobignumber >= 1.0e21 && numbertobignumber < 1.0e24) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e21).toFixed(2) + " " + "s"
      );
    } else if (numbertobignumber >= 1.0e24 && numbertobignumber < 1.0e27) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e24).toFixed(2) + " " + "S"
      );
    } else if (numbertobignumber >= 1.0e27 && numbertobignumber < 1.0e30) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e27).toFixed(2) + " " + "o"
      );
    } else if (numbertobignumber >= 1.0e30 && numbertobignumber < 1.0e33) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e30).toFixed(2) + " " + "n"
      );
    } else if (numbertobignumber >= 1.0e33 && numbertobignumber < 1.0e36) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e33).toFixed(2) + " " + "u"
      );
    } else if (numbertobignumber >= 1.0e36 && numbertobignumber < 1.0e39) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e36).toFixed(2) + " " + "D"
      );
    } else if (numbertobignumber >= 1.0e39 && numbertobignumber < 1.0e42) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e39).toFixed(2) + " " + "T"
      );
    } else if (numbertobignumber >= 1.0e42 && numbertobignumber < 1.0e45) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e42).toFixed(2) +
        " " +
        "Quadro"
      );
    } else if (numbertobignumber >= 1.0e45) {
      return (
        (Math.abs(Number(numbertobignumber)) / 1.0e45).toFixed(2) + " " + "Quin"
      );
    }
  }
  if (numbertobignumber < 1.0e6 && numbertobignumber >= 1000) {
    let arr = [];
    let num = Number(numbertobignumber);
    if (Number.isInteger(num)) {
      while (num > 1000) {
        let n = num % 1000;
        let s = "";
        if (n < 100) s = "0";
        if (n < 10) s = "00";
        arr.unshift(s + n);
        num = Math.floor(num / 1000);
      }

      arr.unshift(num.toString());
      return (str = arr.join());
    } else {
      num = num.toFixed(0);
      while (num > 1000) {
        let n = num % 1000;
        let s = "";
        if (n < 100) s = "0";
        if (n < 10) s = "00";
        arr.unshift(s + n);
        num = Math.floor(num / 1000);
      }

      arr.unshift(num.toString());
      return (str = arr.join());
    }
  } else if (numbertobignumber < 10) {
    return numbertobignumber.toFixed(1);
  } else {
    return numbertobignumber.toFixed(0);
  }
}

function fadeOut(startOpacity, element, duration, finalOpacity, callback) {
  //еффект пропадания
  let opacity = startOpacity;

  let elementFadingInterval = window.setInterval(function () {
    opacity -= 50 / duration;

    if (opacity <= finalOpacity) {
      clearInterval(elementFadingInterval);
      callback();
    }
    element.style.opacity = opacity;
  }, 50);
}

function createNumberOnClicker(event) {
  //создание цифр на главной кнопке
  let clicker = document.getElementById("coin");

  let clickerOffset = clicker.getBoundingClientRect();
  let position = {
    x: event.pageX - clickerOffset.left + randomNumber(-7, 7),
    y: event.pageY - clickerOffset.top,
  };

  let element = document.createElement("div");
  element.textContent = "+" + toCommaString(onetap_amount);
  element.classList.add("number", "unselectable");
  element.id = "numbers";
  element.style.left = position.x + "px";
  element.style.top = position.y + "px";

  clicker.appendChild(element);

  let movementInterval = window.setInterval(function () {
    if (typeof element === "undefined" && element == null)
      clearInterval(movementInterval);

    position.y--;
    element.style.top = position.y + "px";
  }, 10);
  fadeOut(1, element, 3000, 0.6, function () {
    element.remove();
  });
}

setInterval(() => {
  //кол-во в секунду на монете
  if (cpersec > 0 && cpersec < 1000) {
    let clicker = document.getElementById("coin");

    let element = document.createElement("div");
    element.textContent =
      "+" +
      (
        howmuchyougetfrom1 +
        howmuchyougetfrom2 +
        howmuchyougetfrom3 +
        howmuchyougetfrom4 +
        howmuchyougetfrom5 +
        howmuchyougetfrom6 +
        howmuchyougetfrom7 +
        howmuchyougetfrom8 +
        howmuchyougetfrom9 +
        howmuchyougetfrom10 +
        howmuchyougetfrom11 +
        howmuchyougetfrom12 +
        howmuchyougetfrom13
      ).toFixed(1);
    element.classList.add("number", "unselectable");
    element.id = "numbers";
    element.style.left =
      random(0.1, 0.7) * document.getElementById("coin").offsetHeight + "px";
    element.style.top =
      random(0.1, 0.7) * document.getElementById("coin").offsetWidth + "px";
    element.style.opacity = "0.65";
    element.style.fontSize = main();
    function main() {
      if (window.innerWidth <= 1280) {
        return "20px";
      } else if (window.innerWidth >= 2000) {
        return "45px";
      } else {
        return "27px";
      }
    }
    clicker.appendChild(element);
    fadeOut(0.65, element, 3000, 0.2, function () {
      element.remove();
    });
  } else if (cpersec >= 1000) {
    let clicker = document.getElementById("coin");

    let element = document.createElement("div");
    element.textContent =
      "+" +
      toCommaString(
        howmuchyougetfrom1 +
          howmuchyougetfrom2 +
          howmuchyougetfrom3 +
          howmuchyougetfrom4 +
          howmuchyougetfrom5 +
          howmuchyougetfrom6 +
          howmuchyougetfrom7 +
          howmuchyougetfrom8 +
          howmuchyougetfrom9 +
          howmuchyougetfrom10 +
          howmuchyougetfrom11 +
          howmuchyougetfrom12 +
          howmuchyougetfrom13
      );
    element.classList.add("number", "unselectable");
    element.id = "numbers";
    element.style.left =
      random(0.1, 0.7) * document.getElementById("coin").offsetHeight + "px";
    element.style.top =
      random(0.1, 0.7) * document.getElementById("coin").offsetWidth + "px";
    element.style.opacity = "0.65";
    element.style.fontSize = "30px";
    clicker.appendChild(element);
    fadeOut(0.65, element, 3000, 0.2, function () {
      element.remove();
    });
  }
}, 1000);

function randomNumber(min, max) {
  //рандом число
  return Math.round(Math.random() * (max - min) + min);
}

function random(min, max) {
  //рандом число без округления
  return Math.random() * (max - min) + min;
}

function deletePercent(percent) {
  //удаление %
  let str = percent.replace("%", "");
  str = str / 100;
  return Number(str);
}

let checkprogress = setInterval(() => {
  //престиж
  document.getElementById("progresspercent").style.width = progress();
  if (deletePercent(progress()) >= 1) {
    document.getElementById("notification").style.border =
      "medium solid var(--text-dark)";
    document.getElementById("notification").style.background =
      "var(--bdoftext)";
    text.id = "textnotification";
    text.innerText = "Вам доступен престиж!";
    not.appendChild(text);

    img.id = "imgnotification";
    img.innerHTML = '<img id="achievementimg" src="images/prestige.png">';
    not.appendChild(img);

    describe.id = "desribenotification";
    describe.innerHTML = "Нажмите на него!";
    not.appendChild(describe);
    setTimeout(() => {
      not.removeChild(text);
      not.removeChild(img);
      not.removeChild(describe);
      document.getElementById("notification").style.border = "";
      document.getElementById("notification").style.background = "";
    }, 3000);
    clearInterval(checkprogress);
    document.getElementById("buttonPrestige").disabled = false;
    document.getElementById("buttonPrestige").style.backgroundColor =
      "rgba(0,100,0,0.5)";
  }
}, 1000);

function progress() {
  let newprogress = progresscoins - allcoinsfromgame.toFixed(0);
  return (100 - (newprogress / progresscoins) * 100).toFixed(3) + "%";
}

Prestigebutton.addEventListener("click", function onClick() {
  //кнопка престижа
  document.getElementById("buttonPrestige").disabled = true;
  audioachievement.play();
  reset();
  prestigelvl += 1;
  onetap_amount = onetap_amount * 2 * prestigelvl;
  getfrom1 = getfrom1 * 2 * prestigelvl;
  getfrom2 = getfrom2 * 4 * prestigelvl;
  getfrom3 = getfrom3 * 4 * prestigelvl;
  getfrom4 = getfrom4 * 4 * prestigelvl;
  getfrom5 = getfrom5 * 4 * prestigelvl;
  getfrom6 = getfrom6 * 4 * prestigelvl;
  getfrom7 = getfrom7 * 3 * prestigelvl;
  getfrom8 = getfrom8 * 3 * prestigelvl;
  getfrom9 = getfrom9 * 3 * prestigelvl;
  getfrom10 = getfrom10 * 2 * prestigelvl;
  getfrom11 = getfrom11 * 2 * prestigelvl;
  getfrom12 = getfrom12 * 2 * prestigelvl;
  getfrom13 = getfrom13 * 2 * prestigelvl;
  getfrom14 = getfrom14 * 2 * prestigelvl;
  progresscoins = progresscoins * 5;
  document.getElementById("buttonPrestige").innerHTML =
    "Престиж " +
    prestigelvl +
    '<div class="progressbar"><span id="progresspercent" style="width: 0%"></span></div>';
  document.getElementById("notification").style.border =
    "medium solid var(--text-dark)";
  document.getElementById("notification").style.background = "var(--bdoftext)";
  text.id = "textnotification";
  text.innerText = "Престиж повысился до " + prestigelvl + " уровня";
  not.appendChild(text);

  img.id = "imgnotification";
  img.innerHTML = '<img id="achievementimg" src="images/prestige.png">';
  not.appendChild(img);

  describe.id = "desribenotification";
  describe.innerHTML = "Теперь всё приносит в несколько раз больше!";
  not.appendChild(describe);
  setTimeout(() => {
    not.removeChild(text);
    not.removeChild(img);
    not.removeChild(describe);
    document.getElementById("notification").style.border = "";
    document.getElementById("notification").style.background = "";
  }, 3000);
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

function reset() {
  //функция сброса
  allcoinsfromgame = 0; //всего накопленно монет
  coins_amount = 0; //сколько на твоём кошелке
  onetap_amount = 1; //сколько за 1 клик
  priceoffirstbutton = 15; //цена 1 покупки(1 кнопка)
  priceofsecondbutton = 100; //цена 1 покупки(2 кнопка)
  priceofthirdbutton = 1200; //цена 1 покупки(3 кнопка)
  priceoffourbutton = 12000; //цена 1 покупки (4 кнопки)
  priceoffivebutton = 120000; //цена 1 покупки (5 кнопки)
  priceofsixbutton = 1000000; //цена 1 покупки (6 кнопки)
  priceofsevenbutton = 20000000; //цена 1 покупки (7 кнопки)
  priceofeightbutton = 330000000; //цена 1 покупки (8 кнопки)
  priceofninebutton = 5100000000; //цена 1 покупки (9 кнопки)
  priceoftenbutton = 75000000000; //цена 1 покупки (10 кнопки)\
  priceofelevenbutton = 1000000000000; //цена 1 покупки (11 кнопки)
  priceoftwelvebutton = 14000000000000; //цена 1 покупки (12 кнопки)
  priceofthirteenbutton = 170000000000000; //цена 1 покупки (13 кнопки)
  cpersec = 0; // доход в секунду

  for (let i = 1; i <= 14; i++) {
    let variableName = "have" + i;
    let variableName1  = "howmuchyougetfrom" + i;
    eval(variableName + " = 0;");
    eval(variableName1 + " = 0;");
  }

  for (let i = 1; i <= 16; i++) {
    let variableName = "upgradehave" + i;
    eval(variableName + " = 0;");
  }

  getfrom1 = 1; //сколько получаешь за 1 покупку постройки
  getfrom2 = 0.1; //сколько получаешь за 2 покупку постройки
  getfrom3 = 1; //сколько получаешь за 3 покупку постройки
  getfrom4 = 8; //сколько получаешь за 4 покупку постройки
  getfrom5 = 50; //сколько получаешь за 5 покупку постройки
  getfrom6 = 250; //сколько получаешь за 6 покупку постройки
  getfrom7 = 1400; //сколько получаешь за 7 покупку постройки
  getfrom8 = 7800; //сколько получаешь за 8 покупку постройки
  getfrom9 = 44000; //сколько получаешь за 9 покупку постройки
  getfrom10 = 260000; //сколько получаешь за 10 покупку постройки
  getfrom11 = 1600000; //сколько получаешь за 11 покупку постройки
  getfrom12 = 10000000; //сколько получаешь за 12 покупку постройки
  getfrom13 = 65000000; //сколько получаешь за 13 покупку постройки
  getfrom14 = 430000000; //сколько получаешь за 14 покупку постройки

  priceofupgrade1 = 300; //цена 1 улучшения
  priceofupgrade2 = 350; //цена 2 улучшения
  priceofupgrade3 = 1000; //цена 3 улучшения
  priceofupgrade4 = 11000; //цена 4 улучшения
  priceofupgrade5 = 120000; //цена 5 улучшения
  priceofupgrade6 = 1200000; //цена 6 улучшения
  priceofupgrade7 = 10000000; //цена 7 улучшения
  priceofupgrade8 = 200000000; //цена 8 улучшения
  priceofupgrade9 = 3300000000; //цена 9 улучшения
  priceofupgrade10 = 5100000000; //цена 10 улучшения
  priceofupgrade11 = 750000000000; //цена 11 улучшения
  priceofupgrade12 = 10000000000000; //цена 12 улучшения
  priceofupgrade13 = 14000000000000; //цена 13 улучшения
  priceofupgrade14 = 1700000000000000; //цена 14 улучшения
  priceofupgrade15 = 100000000000;

}

document.getElementById("buy1").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "Добытчик приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have1 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom2) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom1) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy2").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "Вагонетка приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have2 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom3) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom2) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy3").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "Машина приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have3 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom4) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom3) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy4").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "шахта приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have4 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom5) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom4) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy5").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "плавильня приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have5 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom6) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom5) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy6").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "завод приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have6 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom7) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom6) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy7").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "крипта приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have7 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom8) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom7) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy8").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "банк приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have8 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom9) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom8) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy9").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "мировой банк приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have9 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom10) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom9) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy10").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "лепрекон приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have10 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom11) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom10) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy11").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "портал приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have11 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom12) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom11) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy12").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "Машина времени приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have12 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom13) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom12) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buy13").onmouseover = function (e) {
  information.remove();
  nameinfo.id = "nameinfo";
  nameinfo.innerText = "Генератор удачи приносит: ";
  info.appendChild(nameinfo);

  nameinfo1.id = "nameinfo1";
  nameinfo1.innerText = have13 + " приносят: ";
  info.appendChild(nameinfo1);

  priceinfo.id = "priceinfo";
  priceinfo.innerHTML = toCommaString(getfrom14) + " в секунду";
  info.appendChild(priceinfo);

  priceinfo1.id = "priceinfo1";
  priceinfo1.innerHTML = toCommaString(howmuchyougetfrom13) + " в секунду";
  info.appendChild(priceinfo1);
};

document.getElementById("buttonsbuy").onmouseout = function (e) {
  info.removeChild(priceinfo);
  info.removeChild(nameinfo);
  info.removeChild(priceinfo1);
  info.removeChild(nameinfo1);

  information.id = "information";
  information.innerHTML = "Кликай и покупай";
  info.appendChild(information);
};

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 750);
  loadGame();
  document.getElementById("notification").style.border =
    "medium solid var(--text-dark)";
  document.getElementById("notification").style.background = "var(--bdoftext)";
  text.id = "textnotification";
  text.innerText = "Добро Пожаловать!";
  not.appendChild(text);

  img.id = "imgnotification";
  img.innerHTML = '<img id="achievementimg" src="images/coins.png">';
  not.appendChild(img);

  describe.id = "desribenotification";
  describe.innerHTML = "Тапайте и покупайте!";
  not.appendChild(describe);
  setTimeout(() => {
    not.removeChild(text);
    not.removeChild(img);
    not.removeChild(describe);
    document.getElementById("notification").style.border = "";
    document.getElementById("notification").style.background = "";
  }, 3000);
  isachievementdone();
};

let checkachievement = setInterval(() => {
  if (allcoinsfromgame >= 1 && achievementdone1 == 0) {
    achievementdone1 += 1;
    document.getElementById("achievement1").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement1").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement1").title = "Заработать 1 монету!";
    achievementnot("Начало положено!");
  }
  if (allcoinsfromgame >= 1000 && achievementdone2 == 0) {
    achievementdone2 += 1;
    document.getElementById("achievement2").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement2").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement2").title = "Заработать 1000 монет!";
    achievementnot("Первые успехи!");
  }
  if (allcoinsfromgame >= 100000 && achievementdone3 == 0) {
    achievementdone3 += 1;
    document.getElementById("achievement3").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement3").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement3").title = "Заработать 100,000 монет!";
    achievementnot("На пути к миллионам");
  }
  if (allcoinsfromgame >= 1000000 && achievementdone4 == 0) {
    achievementdone4 += 1;
    document.getElementById("achievement4").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement4").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement4").title = "Заработать 1M монет!";
    achievementnot("Первый миллион!");
  }
  if (allcoinsfromgame >= 100000000 && achievementdone5 == 0) {
    achievementdone5 += 1;
    document.getElementById("achievement5").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement5").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement5").title = "Заработать 100M монет!";
    achievementnot("Молодой бизнесмен!");
  }
  if (allcoinsfromgame >= 1000000000 && achievementdone6 == 0) {
    achievementdone6 += 1;
    document.getElementById("achievement6").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement6").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement6").title = "Заработать 1B монет!";
    achievementnot("Всемирная известность!");
  }
  if (allcoinsfromgame >= 10000000000000 && achievementdone7 == 0) {
    achievementdone7 += 1;
    document.getElementById("achievement7").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement7").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement7").title = "Заработать 10T монет!";
    achievementnot("Самый богатый человека мира!");
  }
  if (allcoinsfromgame >= 100000000000000 && achievementdone8 == 0) {
    achievementdone8 += 1;
    document.getElementById("achievement8").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement8").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement8").title = "Заработать 100T монет!";
    achievementnot("Деньги всего мира!");
  }
  if (have1 >= 1 && achievementdone9 == 0) {
    achievementdone9 += 1;
    document.getElementById("achievement9").style.backgroundImage =
      'url("images/zolotodobidchik.png")';
    document.getElementById("achievement9").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement9").title = "Купить 1 добытчика!";
    achievementnot("Первая покупка!");
  }
  if (have1 >= 5 && achievementdone10 == 0) {
    achievementdone10 += 1;
    document.getElementById("achievement10").style.backgroundImage =
      'url("images/zolotodobidchik.png")';
    document.getElementById("achievement10").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement10").title = "Купить 5 добытчиков!";
    achievementnot("Начинающий наниматель!");
  }
  if (have1 >= 50 && achievementdone11 == 0) {
    achievementdone11 += 1;
    document.getElementById("achievement11").style.backgroundImage =
      'url("images/zolotodobidchik.png")';
    document.getElementById("achievement11").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement11").title = "Купить 50 добытчиков!";
    achievementnot("Профессиональный наниматель!");
  }
  if (have1 >= 200 && achievementdone12 == 0) {
    achievementdone12 += 1;
    document.getElementById("achievement12").style.backgroundImage =
      'url("images/zolotodobidchik.png")';
    document.getElementById("achievement12").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement12").title = "Купить 200 добытчиков!";
    achievementnot("Успешный наниматель!");
  }
  if (have2 >= 1 && achievementdone13 == 0) {
    achievementdone13 += 1;
    document.getElementById("achievement13").style.backgroundImage =
      'url("images/vagonetka.png")';
    document.getElementById("achievement13").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement13").title = "Купить 1 вагонетку!";
    achievementnot("Первый транспорт!");
  }
  if (have2 >= 5 && achievementdone14 == 0) {
    achievementdone14 += 1;
    document.getElementById("achievement14").style.backgroundImage =
      'url("images/vagonetka.png")';
    document.getElementById("achievement14").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement14").title = "Купить 5 вагонеток!";
    achievementnot("Поезд из вагонеток!");
  }
  if (have2 >= 50 && achievementdone15 == 0) {
    achievementdone15 += 1;
    document.getElementById("achievement15").style.backgroundImage =
      'url("images/vagonetka.png")';
    document.getElementById("achievement15").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement15").title = "Купить 50 вагонеток!";
    achievementnot("Продвинутая доставка!");
  }
  if (have2 >= 150 && achievementdone16 == 0) {
    achievementdone16 += 1;
    document.getElementById("achievement16").style.backgroundImage =
      'url("images/vagonetka.png")';
    document.getElementById("achievement16").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement16").title = "Купить 150 вагонеток!";
    achievementnot("Мега доставка!");
  }

  if (have3 >= 1 && achievementdone17 == 0) {
    achievementdone17 += 1;
    document.getElementById("achievement17").style.backgroundImage =
      'url("images/samosval.png")';
    document.getElementById("achievement17").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement17").title = "Купить 1 машину!";
    achievementnot("Водитель-новичок!");
  }
  if (have3 >= 5 && achievementdone18 == 0) {
    achievementdone18 += 1;
    document.getElementById("achievement18").style.backgroundImage =
      'url("images/samosval.png")';
    document.getElementById("achievement18").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement18").title = "Купить 5 машин!";
    achievementnot("Водитель-любитель!");
  }
  if (have3 >= 50 && achievementdone19 == 0) {
    achievementdone19 += 1;
    document.getElementById("achievement19").style.backgroundImage =
      'url("images/samosval.png")';
    document.getElementById("achievement19").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement19").title = "Купить 50 машин!";
    achievementnot("Автопарк!");
  }
  if (have3 >= 150 && achievementdone20 == 0) {
    achievementdone20 += 1;
    document.getElementById("achievement20").style.backgroundImage =
      'url("images/samosval.png")';
    document.getElementById("achievement20").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement20").title = "Купить 150 машин!";
    achievementnot("Автопарк настоящего бизнесмена!");
  }
  if (have4 >= 1 && achievementdone21 == 0) {
    achievementdone21 += 1;
    document.getElementById("achievement21").style.backgroundImage =
      'url("images/miner.png")';
    document.getElementById("achievement21").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement21").title = "Купить 1 шахту!";
    achievementnot("Начало раскопок!");
  }
  if (have4 >= 5 && achievementdone22 == 0) {
    achievementdone22 += 1;
    document.getElementById("achievement22").style.backgroundImage =
      'url("images/miner.png")';
    document.getElementById("achievement22").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement22").title = "Купить 5 шахт!";
    achievementnot("Золотодобытчик!");
  }
  if (have4 >= 50 && achievementdone23 == 0) {
    achievementdone23 += 1;
    document.getElementById("achievement23").style.backgroundImage =
      'url("images/miner.png")';
    document.getElementById("achievement23").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement23").title = "Купить 50 шахт!";
    achievementnot("Золото уже идёт рекой!");
  }
  if (have4 >= 150 && achievementdone24 == 0) {
    achievementdone24 += 1;
    document.getElementById("achievement24").style.backgroundImage =
      'url("images/miner.png")';
    document.getElementById("achievement24").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement24").title = "Купить 150 шахт!";
    achievementnot("Золотой рай!");
  }
  if (have5 >= 1 && achievementdone25 == 0) {
    achievementdone25 += 1;
    document.getElementById("achievement25").style.backgroundImage =
      'url("images/kotel.png")';
    document.getElementById("achievement25").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement25").title = "Купить 1 плавильню!";
    achievementnot("Переплавка золота!");
  }
  if (have5 >= 5 && achievementdone26 == 0) {
    achievementdone26 += 1;
    document.getElementById("achievement26").style.backgroundImage =
      'url("images/kotel.png")';
    document.getElementById("achievement26").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement26").title = "Купить 5 плавилен!";
    achievementnot("Ювелирные изделия!");
  }
  if (have5 >= 50 && achievementdone27 == 0) {
    achievementdone27 += 1;
    document.getElementById("achievement27").style.backgroundImage =
      'url("images/kotel.png")';
    document.getElementById("achievement27").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement27").title = "Купить 50 плавилен!";
    achievementnot("Крупный поставщик!");
  }
  if (have5 >= 150 && achievementdone28 == 0) {
    achievementdone28 += 1;
    document.getElementById("achievement28").style.backgroundImage =
      'url("images/kotel.png")';
    document.getElementById("achievement28").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement28").title = "Купить 150 плавилен!";
    achievementnot("Горы из золота!");
  }
  if (have6 >= 1 && achievementdone29 == 0) {
    achievementdone29 += 1;
    document.getElementById("achievement29").style.backgroundImage =
      'url("images/zavod.png")';
    document.getElementById("achievement29").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement29").title = "Купить 1 завод!";
    achievementnot("Маленькое производство!");
  }
  if (have6 >= 5 && achievementdone30 == 0) {
    achievementdone30 += 1;
    document.getElementById("achievement30").style.backgroundImage =
      'url("images/zavod.png")';
    document.getElementById("achievement30").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement30").title = "Купить 5 заводов!";
    achievementnot("Тебя уже ищут поставщики!");
  }
  if (have6 >= 50 && achievementdone31 == 0) {
    achievementdone31 += 1;
    document.getElementById("achievement31").style.backgroundImage =
      'url("images/zavod.png")';
    document.getElementById("achievement31").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement31").title = "Купить 50 заводов!";
    achievementnot("Крупный производитель!");
  }
  if (have6 >= 125 && achievementdone32 == 0) {
    achievementdone32 += 1;
    document.getElementById("achievement32").style.backgroundImage =
      'url("images/zavod.png")';
    document.getElementById("achievement32").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement32").title = "Купить 125 заводов!";
    achievementnot("Хватит загрязнять воздух!");
  }
  if (have7 >= 1 && achievementdone33 == 0) {
    achievementdone33 += 1;
    document.getElementById("achievement33").style.backgroundImage =
      'url("images/crypto.png")';
    document.getElementById("achievement33").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement33").title = "Купить 1 крипту!";
    achievementnot("Что такое блокчейн?");
  }
  if (have7 >= 5 && achievementdone34 == 0) {
    achievementdone34 += 1;
    document.getElementById("achievement34").style.backgroundImage =
      'url("images/crypto.png")';
    document.getElementById("achievement34").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement34").title = "Купить 5 крипт!";
    achievementnot("Начало инвестирования!");
  }
  if (have7 >= 50 && achievementdone35 == 0) {
    achievementdone35 += 1;
    document.getElementById("achievement35").style.backgroundImage =
      'url("images/crypto.png")';
    document.getElementById("achievement35").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement35").title = "Купить 50 крипт!";
    achievementnot("Все деньги на криптокошельке!");
  }
  if (have7 >= 100 && achievementdone36 == 0) {
    achievementdone36 += 1;
    document.getElementById("achievement36").style.backgroundImage =
      'url("images/crypto.png")';
    document.getElementById("achievement36").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement36").title = "Купить 125 крипт!";
    achievementnot("Не боишься обвала рынка?");
  }
  if (have8 >= 1 && achievementdone37 == 0) {
    achievementdone37 += 1;
    document.getElementById("achievement37").style.backgroundImage =
      'url("images/bank.png")';
    document.getElementById("achievement37").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement37").title = "Купить 1 крипту!";
    achievementnot("Что такое блокчейн?");
  }
  if (have8 >= 5 && achievementdone38 == 0) {
    achievementdone38 += 1;
    document.getElementById("achievement38").style.backgroundImage =
      'url("images/bank.png")';
    document.getElementById("achievement38").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement38").title = "Купить 5 крипт!";
    achievementnot("Начало инвестирования!");
  }
  if (have8 >= 50 && achievementdone39 == 0) {
    achievementdone39 += 1;
    document.getElementById("achievement39").style.backgroundImage =
      'url("images/bank.png")';
    document.getElementById("achievement39").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement39").title = "Купить 50 крипт!";
    achievementnot("Крупный игрок!");
  }
  if (have8 >= 80 && achievementdone40 == 0) {
    achievementdone40 += 1;
    document.getElementById("achievement40").style.backgroundImage =
      'url("images/bank.png")';
    document.getElementById("achievement40").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement40").title = "Купить 80 крипт!";
    achievementnot("Не боишься обвала рынка?");
  }
  if (have9 >= 1 && achievementdone41 == 0) {
    achievementdone41 += 1;
    document.getElementById("achievement41").style.backgroundImage =
      'url("images/worldbank.png")';
    document.getElementById("achievement41").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement41").title = "Купить 1 биржу!";
    achievementnot("Продать 1 актив!");
  }
  if (have9 >= 5 && achievementdone42 == 0) {
    achievementdone42 += 1;
    document.getElementById("achievement42").style.backgroundImage =
      'url("images/worldbank.png")';
    document.getElementById("achievement42").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement42").title = "Купить 5 бирж!";
    achievementnot("Влияние на рынок!");
  }
  if (have9 >= 25 && achievementdone43 == 0) {
    achievementdone43 += 1;
    document.getElementById("achievement43").style.backgroundImage =
      'url("images/worldbank.png")';
    document.getElementById("achievement43").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement43").title = "Купить 25 бирж!";
    achievementnot("Завладеть рынком!");
  }
  if (have9 >= 50 && achievementdone44 == 0) {
    achievementdone44 += 1;
    document.getElementById("achievement44").style.backgroundImage =
      'url("images/worldbank.png")';
    document.getElementById("achievement44").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement44").title = "Купить 50 бирж!";
    achievementnot("Биржи по всему миру!");
  }
  if (have10 >= 1 && achievementdone45 == 0) {
    achievementdone45 += 1;
    document.getElementById("achievement45").style.backgroundImage =
      'url("images/leprekon.png")';
    document.getElementById("achievement45").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement45").title = "Купить 1 лепрекона!";
    achievementnot("Что? Кто это?");
  }
  if (have10 >= 5 && achievementdone46 == 0) {
    achievementdone46 += 1;
    document.getElementById("achievement46").style.backgroundImage =
      'url("images/leprekon.png")';
    document.getElementById("achievement46").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement46").title = "Купить 5 лепреноков!";
    achievementnot("Ох, они приносят много денег!");
  }
  if (have10 >= 25 && achievementdone47 == 0) {
    achievementdone47 += 1;
    document.getElementById("achievement47").style.backgroundImage =
      'url("images/leprekon.png")';
    document.getElementById("achievement47").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement47").title = "Купить 25 лепреноков!";
    achievementnot("Поверить в магию!");
  }
  if (have10 >= 50 && achievementdone48 == 0) {
    achievementdone48 += 1;
    document.getElementById("achievement48").style.backgroundImage =
      'url("images/leprekon.png")';
    document.getElementById("achievement48").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement48").title = "Купить 50 лепреноков!";
    achievementnot("Внезаконные деньги!");
  }
  if (have11 >= 1 && achievementdone49 == 0) {
    achievementdone49 += 1;
    document.getElementById("achievement49").style.backgroundImage =
      'url("images/portal.png")';
    document.getElementById("achievement49").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement49").title = "Купить 1 портал!";
    achievementnot("Что? А что если...");
  }
  if (have11 >= 5 && achievementdone50 == 0) {
    achievementdone50 += 1;
    document.getElementById("achievement50").style.backgroundImage =
      'url("images/portal.png")';
    document.getElementById("achievement50").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement50").title = "Купить 5 порталов!";
    achievementnot("Ха-ха, мне нравится");
  }
  if (have11 >= 10 && achievementdone51 == 0) {
    achievementdone51 += 1;
    document.getElementById("achievement51").style.backgroundImage =
      'url("images/portal.png")';
    document.getElementById("achievement51").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement51").title = "Купить 10 порталов!";
    achievementnot("Они думают что я внезакона!");
  }
  if (have11 >= 25 && achievementdone52 == 0) {
    achievementdone52 += 1;
    document.getElementById("achievement52").style.backgroundImage =
      'url("images/portal.png")';
    document.getElementById("achievement52").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement52").title = "Купить 25 порталов!";
    achievementnot("Уже можно их продавать!");
  }
  if (have12 >= 1 && achievementdone53 == 0) {
    achievementdone53 += 1;
    document.getElementById("achievement53").style.backgroundImage =
      'url("images/timemachine.png")';
    document.getElementById("achievement53").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement53").title = "Купить 1 машину времени!";
    achievementnot("Возвращаем деньги из прошлого!");
  }
  if (have12 >= 5 && achievementdone54 == 0) {
    achievementdone54 += 1;
    document.getElementById("achievement54").style.backgroundImage =
      'url("images/timemachine.png")';
    document.getElementById("achievement54").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement54").title = "Купить 5 машин времени!";
    achievementnot("Внеземная власть!");
  }
  if (have12 >= 10 && achievementdone55 == 0) {
    achievementdone55 += 1;
    document.getElementById("achievement55").style.backgroundImage =
      'url("images/timemachine.png")';
    document.getElementById("achievement55").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement55").title = "Купить 10 машин времени!";
    achievementnot("Зачем их так много?");
  }
  if (have12 >= 15 && achievementdone56 == 0) {
    achievementdone56 += 1;
    document.getElementById("achievement56").style.backgroundImage =
      'url("images/timemachine.png")';
    document.getElementById("achievement56").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement56").title = "Купить 15 машин времени!";
    achievementnot("Нужно остановиться!");
  }
  if (prestigelvl >= 1 && achievementdone57 == 0) {
    achievementdone57 += 1;
    document.getElementById("achievement57").style.backgroundImage =
      'url("images/prestige.png")';
    document.getElementById("achievement57").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement57").title = "1 уровень престижа!";
    achievementnot("О-о, первое повышение");
  }
  if (prestigelvl >= 2 && achievementdone58 == 0) {
    achievementdone58 += 1;
    document.getElementById("achievement58").style.backgroundImage =
      'url("images/prestige.png")';
    document.getElementById("achievement58").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement58").title = "2 уровень престижа!";
    achievementnot("Дальше-больше!");
  }
  if (prestigelvl >= 3 && achievementdone59 == 0) {
    achievementdone59 += 1;
    document.getElementById("achievement59").style.backgroundImage =
      'url("images/prestige.png")';
    document.getElementById("achievement59").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement59").title = "3 уровень престижа!";
    achievementnot("Тебя не остановить!");
  }
  if (prestigelvl >= 5 && achievementdone60 == 0) {
    achievementdone60 += 1;
    document.getElementById("achievement60").style.backgroundImage =
      'url("images/prestige.png")';
    document.getElementById("achievement60").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement60").title = "5 уровень престижа!";
    achievementnot("Так далеко никто не заходил!");
  }
  if (
    have1 > 10 &&
    have2 > 10 &&
    have3 > 10 &&
    have4 > 10 &&
    have5 > 10 &&
    have6 > 10 &&
    have7 > 10 &&
    have8 > 10 &&
    have9 > 10 &&
    have10 > 10 &&
    have11 > 10 &&
    have12 > 10 &&
    achievementdone61 == 0
  ) {
    achievementdone61 += 1;
    document.getElementById("achievement61").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement61").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement61").title = "Всего по 10 штук";
    achievementnot("Монополист!");
  }
  if (
    have1 > 24 &&
    have2 > 24 &&
    have3 > 24 &&
    have4 > 24 &&
    have5 > 24 &&
    have6 > 24 &&
    have7 > 24 &&
    have8 > 24 &&
    have9 > 24 &&
    have10 > 24 &&
    have11 > 24 &&
    have12 > 24 &&
    achievementdone62 == 0
  ) {
    achievementdone62 += 1;
    document.getElementById("achievement62").style.backgroundImage =
      'url("images/icon.png")';
    document.getElementById("achievement62").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement62").title = "Всего по 25 штук";
    achievementnot("Монополист!");
  }
  if (onetap_amount > 1500000 && achievementdone63 == 0) {
    achievementdone63 += 1;
    document.getElementById("achievement63").style.backgroundImage =
      'url("images/clickach.png")';
    document.getElementById("achievement63").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement63").title = "Тап больше 1.5M";
    achievementnot("Огромный тап!");
  }

  if (
    achievementdone1 == 1 &&
    achievementdone2 == 1 &&
    achievementdone3 == 1 &&
    achievementdone4 == 1 &&
    achievementdone5 == 1 &&
    achievementdone6 == 1 &&
    achievementdone7 == 1 &&
    achievementdone8 == 1 &&
    achievementdone9 == 1 &&
    achievementdone10 == 1 &&
    achievementdone11 == 1 &&
    achievementdone12 == 1 &&
    achievementdone13 == 1 &&
    achievementdone14 == 1 &&
    achievementdone15 == 1 &&
    achievementdone16 == 1 &&
    achievementdone17 == 1 &&
    achievementdone18 == 1 &&
    achievementdone19 == 1 &&
    achievementdone20 == 1 &&
    achievementdone21 == 1 &&
    achievementdone22 == 1 &&
    achievementdone23 == 1 &&
    achievementdone24 == 1 &&
    achievementdone25 == 1 &&
    achievementdone26 == 1 &&
    achievementdone27 == 1 &&
    achievementdone28 == 1 &&
    achievementdone29 == 1 &&
    achievementdone30 == 1 &&
    achievementdone31 == 1 &&
    achievementdone32 == 1 &&
    achievementdone33 == 1 &&
    achievementdone34 == 1 &&
    achievementdone35 == 1 &&
    achievementdone36 == 1 &&
    achievementdone37 == 1 &&
    achievementdone38 == 1 &&
    achievementdone39 == 1 &&
    achievementdone40 == 1 &&
    achievementdone41 == 1 &&
    achievementdone42 == 1 &&
    achievementdone43 == 1 &&
    achievementdone44 == 1 &&
    achievementdone45 == 1 &&
    achievementdone46 == 1 &&
    achievementdone47 == 1 &&
    achievementdone48 == 1 &&
    achievementdone49 == 1 &&
    achievementdone50 == 1 &&
    achievementdone51 == 1 &&
    achievementdone52 == 1 &&
    achievementdone53 == 1 &&
    achievementdone54 == 1 &&
    achievementdone55 == 1 &&
    achievementdone56 == 1 &&
    achievementdone57 == 1 &&
    achievementdone58 == 1 &&
    achievementdone59 == 1 &&
    achievementdone60 == 1 &&
    achievementdone61 == 1 &&
    achievementdone62 == 1 &&
    achievementdone63 == 1
  ) {
    clearInterval(checkachievement);
    document.getElementById("achievement64").style.backgroundImage =
      'url("images/achievementdone.png")';
    document.getElementById("achievement64").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("achievement69").title = "Открыть все достижения!";
    achievementnot("Упс... Ты открыл все достижения!");
  }
}, 1500);

function achievementnot(describess) {
  audioachievement.play();
  document.getElementById("notification").style.border =
    "medium solid var(--text-dark)";
  document.getElementById("notification").style.background = "var(--bdoftext)";
  text.id = "textnotification";
  text.innerText = "У вас новое достижение!";
  not.appendChild(text);

  img.id = "imgnotification";
  img.innerHTML = '<img id="achievementimg" src="images/achievementdone.png">';
  not.appendChild(img);

  describe.id = "desribenotification";
  describe.innerHTML = describess;
  not.appendChild(describe);
  setTimeout(() => {
    not.removeChild(text);
    not.removeChild(img);
    not.removeChild(describe);
    document.getElementById("notification").style.border = "";
    document.getElementById("notification").style.background = "";
  }, 3000);
}

function isachievementdone() {
  function checkAchievement(name, achievement, background, title) {
    if(name === 1) {
      document.getElementById(achievement).style.backgroundImage =
          `url(${background})`;
      document.getElementById(achievement).style.backgroundRepeat =
          "no-repeat";
      document.getElementById(achievement).title = title;
    }
  }

  checkAchievement(achievementdone1, "achievement1", "images/icon.png", "Заработать 1 монету!")
  checkAchievement(achievementdone2, "achievement2", "images/icon.png", "Заработать 1000 монет!");
  checkAchievement(achievementdone3, "achievement3", "images/icon.png", "Заработать 100,000 монет!");
  checkAchievement(achievementdone4, "achievement4", "images/icon.png", "Заработать 1M монет!");
  checkAchievement(achievementdone5, "achievement5", "images/icon.png", "Заработать 100M монет!");
  checkAchievement(achievementdone6, "achievement6", "images/icon.png", "Заработать 1B монет!");
  checkAchievement(achievementdone7, "achievement7", "images/icon.png", "Заработать 1B монет!");
  checkAchievement(achievementdone8, "achievement8", "images/icon.png", "Заработать 100T монет!");
  checkAchievement(achievementdone9, "achievement9", "images/zolotodobidchik.png", "Купить 1 добытчика");
  checkAchievement(achievementdone10, "achievement10", "images/zolotodobidchik.png", "Купить 5 добытчиков");
  checkAchievement(achievementdone11, "achievement11", "images/zolotodobidchik.png", "Купить 50 добытчиков");
  checkAchievement(achievementdone12, "achievement12", "images/zolotodobidchik.png", "Купить 200 добытчиков");
  checkAchievement(achievementdone13, "achievement13", "images/vagonetka.png", "Купить 1 вагонетку!");
  checkAchievement(achievementdone14, "achievement14", "images/vagonetka.png", "Купить 5 вагонеток!");
  checkAchievement(achievementdone15, "achievement15", "images/vagonetka.png", "Купить 50 вагонеток!");
  checkAchievement(achievementdone16, "achievement16", "images/vagonetka.png", "Купить 150 вагонеток!");
  checkAchievement(achievementdone17, "achievement17", "images/samosval.png", "Купить 1 машину!");
  checkAchievement(achievementdone18, "achievement18", "images/samosval.png", "Купить 5 машин!");
  checkAchievement(achievementdone19, "achievement19", "images/samosval.png", "Купить 50 машин!");
  checkAchievement(achievementdone20, "achievement20", "images/samosval.png", "Купить 150 машин!");
  checkAchievement(achievementdone21, "achievement21", "images/miner.png", "Купить 1 шахту!");
  checkAchievement(achievementdone22, "achievement22", "images/miner.png", "Купить 5 шахт!");
  checkAchievement(achievementdone23, "achievement23", "images/miner.png", "Купить 50 шахт!");
  checkAchievement(achievementdone24, "achievement24", "images/miner.png", "Купить 150 шахт!");
  checkAchievement(achievementdone25, "achievement25", "images/kotel.png", "Купить 1 плавильню!");
  checkAchievement(achievementdone26, "achievement26", "images/kotel.png", "Купить 5 плавилен!");
  checkAchievement(achievementdone27, "achievement27", "images/kotel.png", "Купить 50 плавилен!");
  checkAchievement(achievementdone28, "achievement28", "images/kotel.png", "Купить 150 плавилен!");
  checkAchievement(achievementdone29, "achievement29", "images/zavod.png", "Купить 1 завод!");
  checkAchievement(achievementdone30, "achievement30", "images/zavod.png", "Купить 5 заводов!");
  checkAchievement(achievementdone31, "achievement31", "images/zavod.png", "Купить 50 заводов!");
  checkAchievement(achievementdone32, "achievement32", "images/zavod.png", "Купить 125 заводов!");
  checkAchievement(achievementdone33, "achievement33", "images/crypto.png", "Купить 1 крипту!");
  checkAchievement(achievementdone34, "achievement34", "images/crypto.png", "Купить 5 крипт!");
  checkAchievement(achievementdone35, "achievement35", "images/crypto.png", "Купить 50 крипт!");
  checkAchievement(achievementdone36, "achievement36", "images/crypto.png", "Купить 125 крипт!");
  checkAchievement(achievementdone37, "achievement37", "images/bank.png", "Купить 1 крипту!");
  checkAchievement(achievementdone38, "achievement38", "images/bank.png", "Купить 5 крипт!");
  checkAchievement(achievementdone39, "achievement39", "images/bank.png", "Купить 50 крипт!");
  checkAchievement(achievementdone40, "achievement40", "images/bank.png", "Купить 80 крипт!");
  checkAchievement(achievementdone41, "achievement41", "images/worldbank.png", "Купить 1 биржу!");
  checkAchievement(achievementdone42, "achievement42", "images/worldbank.png", "Купить 5 бирж");
  checkAchievement(achievementdone43, "achievement43", "images/worldbank.png", "Купить 25 бирж");
  checkAchievement(achievementdone44, "achievement44", "images/worldbank.png", "Купить 50 бирж");
  checkAchievement(achievementdone45, "achievement45", "images/leprekon.png", "Купить 1 лепрекона!");
  checkAchievement(achievementdone46, "achievement46", "images/leprekon.png", "Купить 5 лепреноков!");
  checkAchievement(achievementdone47, "achievement47", "images/leprekon.png", "Купить 25 лепреноков!");
  checkAchievement(achievementdone48, "achievement48", "images/leprekon.png", "Купить 50 лепреноков!");
  checkAchievement(achievementdone49, "achievement49", "images/portal.png", "Купить 1 портал!");
  checkAchievement(achievementdone50, "achievement50", "images/portal.png", "Купить 5 порталов!");
  checkAchievement(achievementdone51, "achievement51", "images/portal.png", "Купить 10 порталов!");
  checkAchievement(achievementdone52, "achievement52", "images/portal.png", "Купить 25 порталов!");
  checkAchievement(achievementdone53, "achievement53", "images/timemachine.png", "Купить 1 машину времени!");
  checkAchievement(achievementdone54, "achievement54", "images/timemachine.png", "Купить 5 машин времени!");
  checkAchievement(achievementdone55, "achievement55", "images/timemachine.png", "Купить 10 машин времени!");
  checkAchievement(achievementdone56, "achievement56", "images/timemachine.png", "Купить 15 машин времени!");
  checkAchievement(achievementdone57, "achievement57", "images/prestige.png", "1 уровень престижа!");
  checkAchievement(achievementdone58, "achievement58", "images/prestige.png", "2 уровень престижа!");
  checkAchievement(achievementdone59, "achievement59", "images/prestige.png", "3 уровень престижа!");
  checkAchievement(achievementdone60, "achievement60", "images/prestige.png", "5 уровень престижа!");
  checkAchievement(achievementdone61, "achievement61", "images/icon.png", "Всего по 10 штук");
  checkAchievement(achievementdone62, "achievement62", "images/icon.png", "Всего по 25 штук");
  checkAchievement(achievementdone63, "achievement63", "images/clickach.png", "Тап больше 1.5M");
}

let howmuchtobuy = 1;

function fixPrice(price, priceof){
  document.getElementById(price).innerHTML = toCommaString(
      newprice(priceof, howmuchtobuy)
  );
}

function thing1() {
  document.getElementById("buy1thing").classList = "buythingselected";
  document.getElementById("buy10thing").classList = "buythingnotselected";
  document.getElementById("buy100thing").classList = "buythingnotselected";
  howmuchtobuy = 1;

  fixPrice("price1", priceoffirstbutton)
  fixPrice("price2", priceofsecondbutton)
  fixPrice("price3", priceofthirdbutton)
  fixPrice("price4", priceoffourbutton)
  fixPrice("price5", priceoffivebutton)
  fixPrice("price6", priceofsixbutton)
  fixPrice("price7", priceofsevenbutton)
  fixPrice("price8", priceofeightbutton)
  fixPrice("price9", priceofninebutton)
  fixPrice("price10", priceoftenbutton)
  fixPrice("price11", priceofelevenbutton)
  fixPrice("price12", priceoftwelvebutton)
  fixPrice("price13", priceofthirteenbutton)
}

function thing10() {
  document.getElementById("buy1thing").classList = "buythingnotselected";
  document.getElementById("buy10thing").classList = "buythingselected";
  document.getElementById("buy100thing").classList = "buythingnotselected";
  howmuchtobuy = 10;

  fixPrice("price1", priceoffirstbutton)
  fixPrice("price2", priceofsecondbutton)
  fixPrice("price3", priceofthirdbutton)
  fixPrice("price4", priceoffourbutton)
  fixPrice("price5", priceoffivebutton)
  fixPrice("price6", priceofsixbutton)
  fixPrice("price7", priceofsevenbutton)
  fixPrice("price8", priceofeightbutton)
  fixPrice("price9", priceofninebutton)
  fixPrice("price10", priceoftenbutton)
  fixPrice("price11", priceofelevenbutton)
  fixPrice("price12", priceoftwelvebutton)
  fixPrice("price13", priceofthirteenbutton)
}

function thing100() {
  document.getElementById("buy1thing").classList = "buythingnotselected";
  document.getElementById("buy10thing").classList = "buythingnotselected";
  document.getElementById("buy100thing").classList = "buythingselected";
  howmuchtobuy = 100;

  fixPrice("price1", priceoffirstbutton)
  fixPrice("price2", priceofsecondbutton)
  fixPrice("price3", priceofthirdbutton)
  fixPrice("price4", priceoffourbutton)
  fixPrice("price5", priceoffivebutton)
  fixPrice("price6", priceofsixbutton)
  fixPrice("price7", priceofsevenbutton)
  fixPrice("price8", priceofeightbutton)
  fixPrice("price9", priceofninebutton)
  fixPrice("price10", priceoftenbutton)
  fixPrice("price11", priceofelevenbutton)
  fixPrice("price12", priceoftwelvebutton)
  fixPrice("price13", priceofthirteenbutton)
}

function newprice(oldprice, hwm) {
  let a = 0;
  for (let i = 0; i < hwm; i++) {
    a += oldprice;
    oldprice = oldprice * 1.15;
  }
  return a;
}

function chekiiing(price, hwm) {
  for (let i = 0; i < hwm; i++) {
    price = (price / 100) * 115;
  }
  return price;
}

function discount() {
  priceoffirstbutton = +((priceoffirstbutton / 100) * 90).toFixed(1);
  priceofsecondbutton = +((priceofsecondbutton / 100) * 90).toFixed(1);
  priceofthirdbutton = +((priceofthirdbutton / 100) * 90).toFixed(1);
  priceoffourbutton = +((priceoffourbutton / 100) * 90).toFixed(1);
  priceoffivebutton = +((priceoffivebutton / 100) * 90).toFixed(1);
  priceofsixbutton = +((priceofsixbutton / 100) * 90).toFixed(1);
  priceofsevenbutton = +((priceofsevenbutton / 100) * 90).toFixed(1);
  priceofeightbutton = +((priceofeightbutton / 100) * 90).toFixed(1);
  priceofninebutton = +((priceofninebutton / 100) * 90).toFixed(1);
  priceoftenbutton = +((priceoftenbutton / 100) * 90).toFixed(1);
  priceofelevenbutton = +((priceofelevenbutton / 100) * 90).toFixed(1);
  priceoftwelvebutton = +((priceoftwelvebutton / 100) * 90).toFixed(1);
  priceofthirteenbutton = +((priceofthirteenbutton / 100) * 90).toFixed(1);

  document.getElementById("price1").innerHTML =
    toCommaString(priceoffirstbutton);
  document.getElementById("price2").innerHTML =
    toCommaString(priceofsecondbutton);
  document.getElementById("price3").innerHTML =
    toCommaString(priceofthirdbutton);
  document.getElementById("price4").innerHTML =
    toCommaString(priceoffourbutton);
  document.getElementById("price5").innerHTML =
    toCommaString(priceoffivebutton);
  document.getElementById("price6").innerHTML = toCommaString(priceofsixbutton);
  document.getElementById("price7").innerHTML =
    toCommaString(priceofsevenbutton);
  document.getElementById("price8").innerHTML =
    toCommaString(priceofeightbutton);
  document.getElementById("price9").innerHTML =
    toCommaString(priceofninebutton);
  document.getElementById("price10").innerHTML =
    toCommaString(priceoftenbutton);
  document.getElementById("price11").innerHTML =
    toCommaString(priceofelevenbutton);
  document.getElementById("price12").innerHTML =
    toCommaString(priceoftwelvebutton);
  document.getElementById("price13").innerHTML = toCommaString(
    priceofthirteenbutton
  );
}
