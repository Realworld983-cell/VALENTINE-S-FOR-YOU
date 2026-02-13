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
  {src:"IMG-20260210-WA0004.jpg",text:"The day you came into my life ❤️"},
  {src:"IMG-20260210-WA0005.jpg",text:"Your smile is my happiness 😊"},
  {src:"IMG-20260210-WA0006.jpg",text:"Every moment with you is magical ✨"},
  {src:"IMG-20260210-WA0007.jpg",text:"You are my safe place 💕"},
  {src:"IMG-20260210-WA0008.jpg",text:"Forever starts with you 💖"},
  {src:"IMG-20260210-WA0004.jpg",text:"My heart beats for you 💓"},
  {src:"IMG-20260210-WA0006.jpg",text:"Will You My Velentine❤️"}
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
