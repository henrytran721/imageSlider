const imageSlide = document.getElementsByClassName('imageSlide');
const dot = document.getElementsByClassName('dot');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const firstDot = document.querySelector('.firstDot');
const secondDot = document.querySelector('.secondDot');
const thirdDot = document.querySelector('.thirdDot');


console.log(imageSlide);

let slideIndex = 0;
imageSlide[slideIndex].style.display = 'block';

// Proceed forward with right arrow
rightArrow.addEventListener('click', function(){
  for(let i = 0; i < imageSlide.length; i++){
    imageSlide[i].style.display = 'none';
  }
  if(slideIndex === 0) {
    imageSlide[slideIndex+1].style.display = 'block';
    slideIndex++;
  } else if(slideIndex === 1) {
    imageSlide[slideIndex+1].style.display = 'block';
    slideIndex++;
  } else {
    imageSlide[slideIndex - 2].style.display = 'block';
    slideIndex -= 2;
  }

});

//go backward with left arrow
leftArrow.addEventListener('click', function(){
  for(let j = 0; j < imageSlide.length; j++) {
    imageSlide[j].style.display = 'none';
  }
  if(slideIndex === 0) {
    imageSlide[slideIndex + 2].style.display = 'block';
    slideIndex += 2;
  } else if (slideIndex === 1) {
    imageSlide[slideIndex - 1].style.display = 'block';
    slideIndex--;
  } else {
    imageSlide[slideIndex - 1].style.display = 'block';
    slideIndex--;
  }
  return slideIndex;
});

//function to click on dots to choose image
function activeDot(index, notActive, notActiveTwo){
  imageSlide[index].style.display = 'block';
  imageSlide[notActive].style.display = 'none';
  imageSlide[notActiveTwo].style.display = 'none';
  dot[index].classList.add('active');
  dot[notActive].classList.remove('active');
  dot[notActiveTwo].classList.remove('active');
}

//Event Listeners
firstDot.addEventListener('click', function(){
  activeDot(0,1,2);
});
secondDot.addEventListener('click', function(){
  activeDot(1,0,2);
});
thirdDot.addEventListener('click', function(){
  activeDot(2,0,1);
});

//Function to move through slides
function showSlides() {
  if(slideIndex === 0) {
    imageSlide[0].style.display = 'block';
    imageSlide[1].style.display = 'none';
    imageSlide[2].style.display = 'none';
    slideIndex++;
  } else if(slideIndex === 1) {
    imageSlide[1].style.display = 'block';
    imageSlide[0].style.display = 'none';
    imageSlide[2].style.display = 'none';
    slideIndex++;
  } else {
    imageSlide[2].style.display = 'block';
    imageSlide[1].style.display = 'none';
    imageSlide[0].style.display = 'none';
    slideIndex -= 2;
  }
  setTimeout(showSlides, 2000);
}
showSlides();
