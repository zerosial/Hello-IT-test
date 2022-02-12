/*

  < Types basic 1 >

  💬 를 적절한 값으로 고쳐주세요!
  공백도 단어의 한종류

*/

const empty = "";

const result = typeof empty;

if (result === "string") {
  alert("🎉");
}

/*

  < Types basic 2 >

  💬 를 적절한 값으로 고쳐주세요!
  첫 함수는 undefined

*/

let empty;

const result = typeof empty;

if (result === "undefined") {
  alert("🎉");
}


/*

  < Types basic 3 >

  💬 를 적절한 값으로 고쳐주세요!
  isNAN -> 숫자일경우 false / 비숫자는 true 

*/

const num = 3;

const result = isNaN(num);

if (result === false) {
  alert("🎉");
}

/*

  < Types basic 4 >

  💬 를 적절한 값으로 고쳐주세요!
  넘버 안이 숫자가 아님 = nan = isnan에서 true 리턴

*/

const numberABC = Number("ABC");

const result = isNaN(numberABC);

if (result === true) {
  alert("🎉");
}

/*

  < Types basic 5 >

  💬 를 적절한 값으로 고쳐주세요!
  ten1 -> number
  ten2 -> string
  ten1 === ten2 -> false

*/

const ten1 = 10;
const ten2 = "10";

const result = ((typeof ten1) === (typeof ten2));

if (result === false) {
  alert("🎉");
}