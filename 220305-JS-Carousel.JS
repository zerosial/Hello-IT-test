/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

 /* 
left -> 왼쪽화살표 
right -> 오른쪽화살표 
html에 img[0] 신규추가 (표시화면)
img -> img[1] ~ img[5]
dot -> dot[0] ~ dot[4]
*/


var i = 1;
const left = document.querySelector(".fa-arrow-left");
const right = document.querySelector(".fa-arrow-right");
const img = document.querySelectorAll(".image-box > img");
const dot = document.querySelectorAll(".dot-list > li");


left.addEventListener('click', function leftclick(){
  if (i === 1){
  i = 5;
  }
  else{
  i--;
  }
  img[0].setAttribute( 'src', img[i].src );
  });

right.addEventListener('click', function rightclick(){
 if (i === 5){
  i = 1;
  }
  else{
  i++;
  }
  img[0].setAttribute( 'src', img[i].src );
  });

for (let n = 1; n < 6; n++){
dot[n-1].addEventListener('click', function dotclick(){
  img[0].setAttribute( 'src', img[n].src );
  i = n;
});
}