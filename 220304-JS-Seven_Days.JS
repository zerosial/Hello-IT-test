/*

  다음과 같은 조건을 만족하는 주간 달력을 만들어 주세요!
  
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 days 배열을 사용해야 합니다.
 
  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.


  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
   
  HTML
  
  <table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
</table>
*/

// 1안
const days = ["일", "월", "화", "수", "목", "금", "토"];
const trElement = document.querySelector("tr");
const tr0 = trElement.children[0];
tr0.innerText = days[0];
const tr1 = trElement.children[1];
tr1.innerText = days[1];
const tr2 = trElement.children[2];
tr2.innerText = days[2];
const tr3 = trElement.children[3];
tr3.innerText = days[3];
const tr4 = trElement.children[4];
tr4.innerText = days[4];
const tr5 = trElement.children[5];
tr5.innerText = days[5];
const tr6 = trElement.children[6];
tr6.innerText = days[6];

// 2안 -> tr의 자식들을 제일 위에부터 카운팅
const days = ["일", "월", "화", "수", "목", "금", "토"];
for (var i = 0; i < days.length; i++){
const $trElement = document.querySelector("tr");
trElement.children[i].innerText = days[i]
};

// 3안 -> th 항목 전체 선택후 제일 위에부터 카운팅
const days = ["일", "월", "화", "수", "목", "금", "토"];
for (let i = 0; i < days.length; i++){
const $thElement = document.querySelectorAll("th");
$thElement[i].innerText = days[i]
};