const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "love u😘😍💜";
  gif.src =
    "https://media.giphy.com/media/13BwjdpxACoBPO/giphy.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    // Adjust the size of the GIF
    gif.style.width = "300px"; // Adjust the width as needed
    gif.style.height = "auto"; 
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

