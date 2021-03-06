/*

FizzBuzz
자바스크립트의 반복문과 조건문 등 여러분이 배운 지식을 이용하여 아래와 같은 조건을 만족하는 코드를 작성해보세요.
1부터 100까지 console.log를 사용하여 콘솔에 요구사항과 같이 출력합니다.
3의 배수는 "fizz"라는 문자열을 출력합니다.
5의 배수는 "buzz"라는 문자열을 출력합니다.
3과 5의 공배수는 "fizzbuzz"라는 문자열을 출력합니다.
나머지 숫자들은 해당 숫자 자체를 출력합니다.

<출력 예시>
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
.
.
.
98
fizz
buzz

*/

for (let i = 1; i < 101; i++) {
  if (i%15 === 0) {
    console.log("fizzbuzz");
  }
  else if (i%3 === 0) {
    console.log("fizz");
  }
  else if (i%5 === 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}