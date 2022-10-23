import { theGame } from "/game.js";

export let inventory = document.querySelector(".inventory-btn");

inventory.addEventListener("click", (event) => {
  theGame.clickedOnInventory = true;
  if (!inventory.classList.value) theGame.isEmptyInventory = true;
  else theGame.isEmptyInventory = false;
});


export function inventoryClasses(eTargetClass) {
  inventory.classList = "";
  inventory.classList.add(`${eTargetClass}`);
}

export function resetInventory() {
  inventory.classList = "";
  theGame.clickedOnInventory = false;
  theGame.isEmptyInventory = true;
}
