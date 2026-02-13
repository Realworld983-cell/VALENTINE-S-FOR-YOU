const noBtn = document.getElementById("no");

// Make sure button can move
noBtn.style.position = "absolute";

noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});

document.getElementById("yes").onclick = function () {
  document.getElementById("prankPage").style.display = "none";
  document.getElementById("slideshow").style.display = "flex";

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    console.log("Autoplay blocked until user interaction");
  });

  startSlideshow();
};

const images = [
  { src: "IMG-20260210-WA0008.jpg", text: "The day you came into my life ❤️" },
  { src: "IMG-20260210-WA0005.jpg", text: "Your smile is my happiness 😊" },
  { src: "IMG-20260210-WA0006.jpg", text: "Every moment with you is magical ✨" },
  { src: "IMG-20260210-WA0007.jpg", text: "You are my safe place 💕" },
  { src: "IMG-20260210-WA0008.jpg", text: "Forever starts with you 💖" },
  { src: "IMG-20260210-WA0004.jpg", text: "My heart beats for you 💓" },
  { src: "IMG-20260210-WA0006.jpg", text: "Will You Be My Valentine ❤️" }
];

let index = 0;
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const background = document.querySelector(".background");

function startSlideshow() {

  // 🔥 VERY IMPORTANT: Set first image
  slide.src = images[0].src;
  background.style.backgroundImage = `url(${images[0].src})`;
  caption.innerText = images[0].text;

  slide.style.opacity = 1;
  caption.style.opacity = 1;

  setInterval(() => {
    slide.style.opacity = 0;
    caption.style.opacity = 0;

    setTimeout(() => {
      index++;
      if (index >= images.length) index = 0;

      slide.src = images[index].src;
      background.style.backgroundImage = `url(${images[index].src})`;
      caption.innerText = images[index].text;

      slide.style.opacity = 1;
      caption.style.opacity = 1;

    }, 1000);

  }, 5000);
}
