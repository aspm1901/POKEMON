const gifPokemon = document.getElementById("gifPokemon");
let positionX = 50;
let positionY = 50;
const step = 10;

document.addEventListener("keydown", moveCharacter);

function moveCharacter(event) {
  switch (event.key) {
    case "ArrowUp":
      positionY = Math.max(0, positionY - step);
      break;
    case "ArrowDown":
      positionY = Math.min(
        window.innerHeight - gifPokemon.clientHeight,
        positionY + step
      );
      break;
    case "ArrowLeft":
      positionX = Math.max(0, positionX - step);
      break;
    case "ArrowRight":
      positionX = Math.min(
        window.innerWidth - gifPokemon.clientWidth,
        positionX + step
      );
      break;
  }
  gifPokemon.style.top = positionY + "px";
  gifPokemon.style.left = positionX + "px";
}
