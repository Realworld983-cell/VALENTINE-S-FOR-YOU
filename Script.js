const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});

document.getElementById("yes").onclick = function() {
  document.getElementById("prankPage").style.display = "none";
  document.getElementById("slideshow").style.display = "flex";
  document.getElementById("bgMusic").play();
  startSlideshow();
};

const images = [
  {src:"img1.jpg",text:"The day you came into my life ❤️"},
  {src:"img2.jpg",text:"Your smile is my happiness 😊"},
  {src:"img3.jpg",text:"Every moment with you is magical ✨"},
  {src:"img4.jpg",text:"You are my safe place 💕"},
  {src:"img5.jpg",text:"Forever starts with you 💖"},
  {src:"img6.jpg",text:"My heart beats for you 💓"},
  {src:"img7.jpg",text:"I Love You Forever ❤️"}
];

let index = 0;
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const background = document.querySelector(".background");

function startSlideshow(){
  background.style.backgroundImage = `url(${images[0].src})`;
  caption.innerText = images[0].text;
  caption.style.opacity = 1;

  setInterval(() => {
    slide.style.opacity = 0;
    caption.style.opacity = 0;

    setTimeout(() => {
      index++;
      if(index >= images.length) index = 0;

      slide.src = images[index].src;
      background.style.backgroundImage = `url(${images[index].src})`;
      caption.innerText = images[index].text;

      slide.style.opacity = 1;
      caption.style.opacity = 1;
    }, 1500);

  }, 6000);
}
