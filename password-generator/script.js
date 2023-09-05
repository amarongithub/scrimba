const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btnGenerate = document.querySelector(".btn-generate");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const passwordLengthSelected = document.querySelector(
  "#password_length_selected",
);
const passwordLength = document.querySelector("#password_length");
const copyPassword1 = document.querySelector(".copy-password1");
const copyPassword2 = document.querySelector(".copy-password2");
const generateMessage = document.querySelector(".generate-message");
const numberEl = document.querySelector("#select-numbers");
const symbolEl = document.querySelector("#select-symbols");

let passwordChars = [...characters];

numberEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    passwordChars.push(...numbers);
    console.log(passwordChars);
  } else {
    passwordChars = passwordChars.filter((item) => !numbers.includes(item));
    console.log(passwordChars);
  }
});

symbolEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    passwordChars.push(...symbols);
    console.log(passwordChars);
  } else {
    passwordChars = passwordChars.filter((item) => !symbols.includes(item));
    console.log(passwordChars);
  }
});

function randomPassword() {
  let newPassword = "";
  for (let i = 1; i <= passwordLengthSelected.textContent; i++) {
    newPassword +=
      passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  return newPassword;
}

function copyPasswordToClip(passwordContent, message) {
  if (passwordContent.textContent !== "") {
    navigator.clipboard
      .writeText(passwordContent.textContent)
      .then(() => {
        generateMessage.style.visibility = "visible";
        generateMessage.textContent = `${message} password copied to clipboard.`;
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  } else {
    generateMessage.style.visibility = "visible";
    generateMessage.textContent = "Please generate passwords before copying";
  }
  setTimeout(() => {
    generateMessage.style.visibility = "hidden";
  }, 1000);
}

// Password Length display next to slider

passwordLengthSelected.textContent = passwordLength.value;
passwordLength.addEventListener("input", (event) => {
  passwordLengthSelected.textContent = event.target.value;
});

btnGenerate.addEventListener("click", function () {
  password1.textContent = randomPassword();
  password2.textContent = randomPassword();
});

// Copy password to clipboard

copyPassword1.addEventListener("click", function () {
  copyPasswordToClip(password1, "First");
});

copyPassword2.addEventListener("click", function () {
  copyPasswordToClip(password2, "Second");
});
