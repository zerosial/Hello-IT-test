/*

  < Conditional statements basic 1 >

  💬 를 적절한 값으로 고쳐주세요!

*/

let num = 3;
let result = null;

if (num < 0) {
  result = "Positive";
} else {
  result = "Negative";
}

if (result === "Negative") {
  alert("🎉");
}

/*

  < Conditional statements basic 2 >

  💬 를 적절한 값으로 고쳐주세요!

*/

let alphabet = "B";
let result = null;

if (alphabet === "A") {
  result = "I am A";
} else if (alphabet === "B") {
  result = "I am B";
} else {
  result = "I am nothing";
}

if (result === "I am B") {
  alert("🎉");
}


/*

  < Conditional statements basic 3 >

  💬 를 적절한 값으로 고쳐주세요!

*/

const zero = 0;                     //false
const empty = "";                   //false
const trueOrFalse = !!undefined;    //false의 !!라서 false
const vaco = "Vanillacoding";       //문자열 trye
let result = null;                  //false

if (zero) {
  result = "I am zero";
} else if (empty) {
  result = "I am empty";
} else if (trueOrFalse) {
  result = "I am trueOrFalse";
} else if (vaco) {
  result = "I am vaco";
} else {
  result = "I am nothing";
}

if (result === "I am vaco") {
  alert("🎉");
}

/*

  스테이크의 내부 온도에 따라 굽기 정도를 알 수 있다고 합니다.

  Medium으로 구워질 수 있도록 💬 를 적절한 값으로 고쳐주세요!

  57~69도 = Medium
  55도 이하 = rare
  70도 이상 = 웰던
  56도는 =가 없어서 웰던으로 표시됨

*/

let temperature = 57;

if (temperature <= 55) {
  alert("Rare 🎃");
} else if (temperature > 56 && temperature < 70) {
  alert("Medium 🎉");
} else {
  alert("Well Done 🎃");
}