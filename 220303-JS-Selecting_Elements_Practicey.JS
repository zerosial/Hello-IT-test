/*

  < Selecting Elements basic 1 >

  💬 를 적절한 값으로 고쳐주세요!

  HTML
  <div class="container">
  <p id="first-item">First</p>
  <p>Second</p>
  <p class="third-item">Third</p>
  <p>Fourth</p>
  </div>

*/

const $p1 = document.getElementById("first-item");
const $p2 = document.getElementsByClassName("third-item");

const text1 = $p1.textContent;
const text2 = $p2[0].textContent;

const result = text1 + text2;

if (result === "FirstThird") {
  alert("🎉");
}

/*

  < Selecting Elements basic 2 >

  💬 를 적절한 값으로 고쳐주세요!

  HTML
  <div class="container">
  <ul>
    <li>List1</li>
    <li>List2</li>
    <li>List3</li>
  </ul>
  <p>Paragraph1</p>
  <p>Paragraph2</p>
</div>


*/

const $li = document.getElementsByTagName("li");
const $p = document.getElementsByTagName("p");

const text1 = $li[2].textContent;  // List3
const text2 = $p[1].textContent;   // Paragraph2

const result = text1 + text2;

if (result === "List3Paragraph2") {
  alert("🎉");
}

/*

  < Selecting Elements basic 3 >

  💬 를 적절한 값으로 고쳐주세요!

  HTML
  <div class="container">
  <ul>
    <li class="item">Lemon</li>
    <li class="item">Apple</li>
    <li class="item">Melon</li>
  </ul>
  <ul>
    <li>Hamburger</li>
    <li>Pizza</li>
    <li>Chicekn</li>
  </ul>
</div>

*/

const $item = document.querySelectorAll(".item");
const $li = document.querySelectorAll("li");

const length1 = $item.length; // 3 (item 항목의 총 갯수)
const length2 = $li.length;   // 6 (li 항목의 총 갯수)
console.log(length1);
console.log(length2);

const result = length1 + length2;

if (result === 9) {
  alert("🎉");
}
