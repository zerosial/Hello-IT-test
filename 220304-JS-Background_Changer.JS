/*

  다음과 같은 조건을 만족하는 화면을 만들어 주세요!
  
  📌 버튼 클릭시 랜덤한 HEX CODE가 배경 색으로 변경되어야 합니다.
  📌 현재 HEX CODE가 <p> 태그의 텍스트로 표시되어야 합니다.

*/
function getRandomColor() {
  var result
  result = "#" + Math.floor(Math.random() * 16777215).toString(16);
  pElement.innerHTML = `HEX CODE: ${result}`;
	return result
}

const wrapperElement = document.querySelector(".wrapper")
const buttonElement = document.querySelector("button");
const pElement = document.querySelector("p");
const bodyElement = document.querySelector("body");
buttonElement.addEventListener("click", function(){wrapperElement.style.backgroundColor = getRandomColor();});