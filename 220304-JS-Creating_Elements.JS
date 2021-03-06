/*

  < Creating Elements basic 1 >

  빈 화면에 "I am a paragraph"라는 텍스트가 나타날 수 있도록

  <p> 태그 생성 및 텍스트 추가 후 <body> 태그의 자식으로 추가해주세요!

  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

*/

const bodyElement = document.querySelector("body");
const pElement = document.createElement("p");
pElement.textContent = "I am a paragraph";
bodyElement.appendChild(pElement);

const pElement = document.createElement("p");
pElement.textContent = "I am a paragraph";
document.body.appendChild(pElement);


/*

  < Creating Elements basic 2 >

  <li> 태그를 생성하여 화면에 • second 가 나타날 수 있도록
  
  <ul> 태그의 자식으로 추가해주세요!

  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

*/

const ulElement = document.querySelector("ul");
const liElement = document.createElement("li");
liElement.textContent = "second";
ulElement.appendChild(liElement);


/*

  < Making todo list >

  할일 목록을 만드려고 합니다. task를 for문으로 순회하며 각각의 요소를
  
  <li> 태그의 텍스트로 만들어 <ul> 태그의 자식으로 추가해주려고 합니다.
  
  최종적으로 Code, Run, Eat, Sleep이 핑크색 화면 안에 나타나도록
  
  코드를 작성해주세요!
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.
  
  
  +-------------------+
  |  <ul>             |
  |    <li>Code</li>  |
  |    <li>Run</li>   |
  |    <li>Eat</li>   |
  |    <li>Sleep</li> |
  |  </ul>            |
  +-------------------+

*/

const task = ["Code", "Run", "Eat", "Sleep"];
const ulElement = document.querySelector("ul");
for (let i = 0; i < task.length; i++){
const liElement = document.createElement("li");
liElement.textContent = task[i];
ulElement.appendChild(liElement);  
}