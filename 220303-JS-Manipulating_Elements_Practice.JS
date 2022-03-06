/*

  < Manipulating Elements basic 1 >
  
  화면에 "I am a paragraph"라는 텍스트가 나타날 수 있도록
  
  <p> 태그에 텍스트를 추가해주세요!
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

  <div>
  <p></p>
  </div>

*/

const pElement = document.querySelector("p");
pElement.append("I am a paragraph");


/*

  < Manipulating Elements basic 2 >
  
  "paragraph1"을 아래 "paragraph2"와 동일한 단어가 되도록
  
  폰트 사이즈는 100px, 색상은 #55ff00로 수정해주세요!
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

  <div>
  <p class="item">paragraph1</p>
  <p class="green">paragraph2</p>
  </div>

*/

const itemElement = document.querySelector(".item");
const itemElement = document.querySelector(".item");
itemElement.style.fontSize="100px";
itemElement.style.color="#55ff00";


/*

  < Traffic Lights >
  
  왼쪽 신호등을 오른쪽 신호등과 같이
  
  Stop, Pause, Go라는 텍스트를 추가해주시고
  
  red, orange, green 클래스를 추가하여
  
  빨간색, 주황색, 초록색 배경색을 가질 수 있도록 수정해주세요!
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.
  
*/

const wrapperElement = document.querySelector(".lightWrapper");
const redLightElement = wrapperElement.children[0];
const orangeLightElement = wrapperElement.children[1];
const greenLightElement = wrapperElement.children[2];
redLightElement.style.backgroundColor = "red";
redLightElement.innerText = "Stop";
orangeLightElement.style.backgroundColor = "orange";
orangeLightElement.innerText = "Pause";
greenLightElement.style.backgroundColor = "green";
greenLightElement.innerTextL = "Go";

//2안
redLightElement.classList.add('red');
redLightElement.innerText = "Stop";
orangeLightElement.classList.add('orange');
orangeLightElement.innerText = "Pause";
greenLightElement.classList.add('green');
greenLightElement.innerText = "Go";
>>>>>>> 2a9dfc5930acfa37af9f43343b23885dcdb105e2
