    let btnRight = document.querySelector(".fas fa-arrow-right fa-3x");
    let btnLeft = document.querySelector(".fas fa-arrow-left fa-3x");
    let imgAll = document.querySelectorAll(".image-box");
    btnRight.addEventListener("click",function () {
      for(i = 0; i < 5; i++){
        imgAll[i].style.transform = "translateX(-463.17px)";
      };
    });
    let dotItem = document.querySelectorAll(".dot-item");
    dotItem.addEventListener("click",function () {
      imgAll[0].style.transform = "translateX(-463.17px)";
    });
