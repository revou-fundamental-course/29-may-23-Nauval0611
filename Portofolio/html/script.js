var slideIndex = 1;
setInterval(function() {
  plusDivs(1);
}, 1000);

function plusDivs(index) {
  showImage(slideIndex += index);
}

function showImage(index) {
  console.log(index);
  const imgList = document.getElementsByClassName("slider");
  var i;
  if (index > imgList.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = imgList.length;
  }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
