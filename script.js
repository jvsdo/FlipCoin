const coin = document.querySelector(".coin");
const heads = document.querySelector(".heads");
const tails = document.querySelector(".tails");

const flipCoin = () => {
  coin.classList.add("flipped");
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 2);
    coin.classList.remove("flipped");
    if (randomNumber === 0) {
      heads.style.transform = "rotateX(0deg)";
      tails.style.transform = "rotateX(180deg)";
    } else {
      heads.style.transform = "rotateX(180deg)";
      tails.style.transform = "rotateX(0deg)";
    }
  }, 1000);
};

coin.addEventListener("click", flipCoin);
