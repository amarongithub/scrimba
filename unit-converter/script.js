/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.querySelector("#user-input");
const convertBtn = document.querySelector(".convert");
const outputLength = document.querySelector(".output-length");
const outputVolume = document.querySelector(".output-volume");
const outputMass = document.querySelector(".output-mass");

convertBtn.addEventListener("click", function () {
  convert(userInput.value);
  // userInput.value = "";
});

function meterToFeet(num) {
  return (num * 3.281).toFixed(3);
}
function feetToMeter(num) {
  return (num / 3.281).toFixed(3);
}

function litersToGallon(num) {
  return (num * 0.264).toFixed(3);
}

function gallonToLiters(num) {
  return (num / 0.264).toFixed(3);
}

function kgToPounds(num) {
  return (num * 2.204).toFixed(3);
}

function poundsToKg(num) {
  return (num / 2.204).toFixed(3);
}

function convert(num) {
  let data = Number(num);
  outputLength.textContent = textGen(
    data,
    meterToFeet(data),
    feetToMeter(data),
    "meters",
    "feet",
  );
  outputVolume.textContent = textGen(
    data,
    litersToGallon(data),
    gallonToLiters(data),
    "liters",
    "gallons",
  );
  outputMass.textContent = textGen(
    data,
    kgToPounds(data),
    poundsToKg(data),
    "kilos",
    "pounds",
  );
}

function textGen(data, value1, value2, unit1, unit2) {
  return `${data} ${unit1} = ${value1} ${unit2} | ${data} ${unit2} = ${value2} ${unit1}`;
}
