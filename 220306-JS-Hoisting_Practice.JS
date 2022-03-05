/*

  < Hoisting basic 1 >

  💬 를 적절한 값으로 고쳐주세요!

*/

function foo() {
  if (result === undefined) {
    alert("🎉");
  }

  var result = "something"; // const, let, var의 차이는 무엇일까요 ?
}

foo();


/*

  < Hoisting basic 2 >

  💬 를 적절한 값으로 고쳐주세요!

*/

let something = "Something";
let result = null;

function foo () {
  if (something === "Something") {
    result = "Is something";
  }
  
  var something = "Else";
}

foo();

if (result === null) {
  alert("🎉");
}


/*

  아래 코드에서 "bar 🎉" 성공 알림창 나타날 수 있도록 만들어주세요!

*/

foo();

function foo() {
  console.log("foo 🎉");
}

const bar = function () {
  alert("bar 🎉");
};

bar();