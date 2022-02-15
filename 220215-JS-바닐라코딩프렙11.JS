/*

  < Logical operators basic 1 >

  💬 를 적절한 값으로 고쳐주세요!
  seven -> true
  tof -> false
  and -> false


*/

const seven = 7;
const trueOrFalse = !!"";

const result = (seven && trueOrFalse);

if (result === false) {
  alert("🎉");
}


/*

  < Logical operators basic 2 >

  💬 를 적절한 값으로 고쳐주세요!
  empty = false
  tof = true (0은 false에서 !반환은 true로 변경)
  str = true
  or -> true

*/

const empty = null;
const trueOrFalse = !0;
const str = "Vanillacoding";

const result = (empty || trueOrFalse || str);

if (result === true) {
  alert("🎉");
}

/*

  < Logical operators basic 3 >

  💬 를 적절한 값으로 고쳐주세요!
  tof -> true
  zero -> false
  str -> true
  &&(and)의 경우 첫 false의 값을 산출 (없으면 최종값) -> 곱하기 같은 기분
  ||(or))의 경우 첫 true의 값을 산출 (없으면 최종값) -> 덧셈같은 기분
  ||(덧셈)먼저 하고 &&연산  


*/

const trueOrFalse = !null;
const zero = 0;
const str = "Vanillacoding";

const result = (trueOrFalse && zero && str);

if (result === 0) {
  alert("🎉");
}


/*

  Ken은 토론회에 참석하였습니다.

  두 가지 의견의 토론 결과는 logical operator에 따라 결정됩니다.

  토론의 최종 결과가 truthy 값이 되도록 💬 를 적절한 값으로 고쳐주세요!

  (Ryan || Blake) -> true
  (Scott && Ken) -> false
  따라서 &&로는 안되고 ||만 가능

*/

const Ryan = false;
const Blake = true;
const Scott = false;
const Ken = true;

const result = (Ryan || Blake) || (Scott && Ken);

if (result) {
  alert("🎉");
}