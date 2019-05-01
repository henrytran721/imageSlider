let imageSlide = document.getElementsByClassName('imageSlide');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

console.log(imageSlide);

let slideIndex = 0;
imageSlide[slideIndex].style.display = 'block';
/*function showSlide(){
  for(let i = 0; i < imageSlide.length; i++) {
    imageSlide[i].style.display = 'none';
  }
  slideIndex++;
  if(slideIndex > imageSlide.length) {
    slideIndex = 1;
  }
  imageSlide[slideIndex - 1].style.display = 'block';
  setTimeout(showSlide, 5000);
}*/

rightArrow.addEventListener('click', function(){
  for(let i = 0; i < imageSlide.length; i++){
    imageSlide[i].style.display = 'none';
  }
  console.log(imageSlide.length);
  console.log(slideIndex);
  if(slideIndex === 0){
    imageSlide[slideIndex+1].style.display = 'block';
    slideIndex++;
  } else {
    imageSlide[slideIndex - 1].style.display = 'block';
    console.log('wtfff');
    slideIndex--;
  }

});
