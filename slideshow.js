document.addEventListener("DOMContentLoaded", function() {
  var slideshow = document.querySelector('.slideshow');
  var images = slideshow.querySelectorAll('img');
  var currentIndex = 0;
  var totalImages = images.length;

  function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
  }

  function showPreviousImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images[currentIndex].style.display = 'block';
  }

  document.getElementById('next').addEventListener('click', showNextImage);
  document.getElementById('previous').addEventListener('click', showPreviousImage);

  // 自动循环播放
  setInterval(showNextImage, 2000); // 每2000毫秒切换到下一张图片
});
