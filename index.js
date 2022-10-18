// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

// Set the speed of the dodger
const dodgerSpeed = 1;

// Get the left position of the dodger
function getDodgerLeft() {
    const leftNumbers = dodger.style.left;
    const left = parseInt(leftNumbers, 10);
    return left;
}

function moveDodgerLeft() {
    const left = getDodgerLeft();
    
    if (left > 0) {
     dodger.style.left = `${left - dodgerSpeed}px`;
    }

    const x = getDodgerLeft();
    console.log(`New Position: ${x}`);
}

function moveDodgerRight() {
    const left = getDodgerLeft();
    const width = 40;
    const gameWidth = 400;
    const maxLeft = gameWidth - width - dodgerSpeed;
  
  if (left <= maxLeft) {
    dodger.style.left = `${left + dodgerSpeed}px`;
  }

  const x = getDodgerLeft();
  console.log(`New Position: ${x}`);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
