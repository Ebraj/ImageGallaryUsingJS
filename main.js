let mainImg = document.querySelector(".main-img > img");
let gridContainer = document.querySelector(".grid-container");

console.log(mainImg, gridContainer);

// Using the Event Delegation
gridContainer.addEventListener("click", funHandler);

// Defining the function
function funHandler(e) {
  let target = e.target.closest("img");
  let imgLink = target.src;
  console.log(imgLink);
  console.log(mainImg.src);
  mainImg.setAttribute("src", imgLink);
}
