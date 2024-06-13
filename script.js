const plus = document.getElementById("counter");
const minus = document.getElementById("counter2");
const prise = document.getElementById("priseID");
const value = document.getElementById("value");
const gb256 = document.getElementById("256");
const gb512 = document.getElementById("512");

function increment() {
  let result = Number(value.textContent) + 1;
  value.textContent = result;
  if (gb512.classList.contains("active")) {
    var priseIphone = Number(prise.textContent) + 1700;
  } else {
    var priseIphone = Number(prise.textContent) + 1500;
  }
  prise.textContent = priseIphone;
}

function decrement() {
  let result = Number(value.textContent) - 1;
  value.textContent = result;
  if (value.innerText == 0) {
    increment();
  }
  if (gb512.classList.contains("active")) {
    var priseIphone = Number(prise.textContent) - 1700;
  } else {
    var priseIphone = Number(prise.textContent) - 1500;
  }
  prise.textContent = priseIphone;
}

function gb256Size() {
  gb512.classList.remove("active");
  gb256.classList.add("active");
  prise.textContent = 1500;
  value.textContent = 1;
}

function gb512Size() {
  gb256.classList.remove("active");
  gb512.classList.add("active");
  prise.textContent = 1700;
  value.textContent = 1;
}

gb256.addEventListener("click", gb256Size);
gb512.addEventListener("click", gb512Size);
plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

const plus2 = document.getElementById("counter1");
const minus2 = document.getElementById("counter22");
const prise2 = document.getElementById("priseID2");
const value2 = document.getElementById("value2");
const gb2562 = document.getElementById("2562");
const gb5122 = document.getElementById("5122");

function increment() {
  let result = Number(value2.textContent) + 1;
  value2.textContent = result;
  if (gb5122.classList.contains("active")) {
    var prise2Iphone = Number(prise2.textContent) + 500;
  } else {
    var prise2Iphone = Number(prise2.textContent) + 300;
  }
  prise2.textContent = prise2Iphone;
}

function decrement() {
  let result = Number(value2.textContent) - 1;
  value2.textContent = result;
  if (value2.innerText == 0) {
    increment();
  }
  if (gb5122.classList.contains("active")) {
    var prise2Iphone = Number(prise2.textContent) - 500;
  } else {
    var prise2Iphone = Number(prise2.textContent) - 300;
  }
  prise2.textContent = prise2Iphone;
}

function gb2562Size() {
  gb5122.classList.remove("active");
  gb2562.classList.add("active");
  prise2.textContent = 300;
  value2.textContent = 1;
}

function gb5122Size() {
  gb2562.classList.remove("active");
  gb5122.classList.add("active");
  prise2.textContent = 500;
  value2.textContent = 1;
}

gb2562.addEventListener("click", gb2562Size);
gb5122.addEventListener("click", gb5122Size);
plus2.addEventListener("click", increment);
minus2.addEventListener("click", decrement);
