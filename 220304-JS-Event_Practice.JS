/*

  < Events basic 1 >

  Button1을 눌럿을 때, Button2와 같이 "🎉"메세지와 함께
  
  알림창이 나나탈 수 있도록 button1Element에 이벤트를 등록시켜 주세요!

  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

*/

const button1Element = document.querySelector(".button1");
button1Element.addEventListener("click", function() {
  alert("🎉");
});


/*
  < Events basic 2 >

  버튼을 눌렀을 때 <p> 태그의 폰트를 본인이 원하는 색상이 되도록
  
  이벤트를 등록시켜 주세요!

  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.

*/

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", function() {
const pElement = document.querySelector("p");
pElement.style.color="green";
});


/*

  < 신호등 불 켜기 >

  다음과 같은 조건을 만족하여 신호등의 불이 켜질수 있도록 만들어 주세요!
  
  📌 Stop, Pause, Go 클릭 시 빨간색, 주황색, 초록색불이 들어와야 합니다.
  📌 전체 불 끄기 버튼을 클릭하면 모든 불이 꺼져야 합니다.
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

*/

const buttonElement = document.querySelector("button");
const wrapperElement = document.querySelector(".lightWrapper");
const redLightElement = wrapperElement.children[0];
const orangeLightElement = wrapperElement.children[1];
const greenLightElement = wrapperElement.children[2];

redLightElement.addEventListener("click", function(){redLightElement.style.backgroundColor = "red";});
orangeLightElement.addEventListener("click", function(){orangeLightElement.style.backgroundColor = "orange";});
greenLightElement.addEventListener("click", function(){greenLightElement.style.backgroundColor = "green";});
buttonElement.addEventListener("click", function(){redLightElement.style.backgroundColor = "white"; greenLightElement.style.backgroundColor = "white"; orangeLightElement.style.backgroundColor = "white"});