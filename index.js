let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });  

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }
  
// WHY DOESN'T .style.right WORK IN THE FUNCTION ON LINE 37 BELOW?  Is it cause the object doesn't have a right: attribute in it's HTML style tag on index.html?  I tried that and it didn't work
{/* <div id="dodger" style="bottom: 0px; left: 180px; right: 300px;"></div> */}

// function moveDodgerRight() {
//     let rightNumbers = dodger.style.right.replace("px", "");
//     let right = parseInt(rightNumbers, 10);
  
//     if (right > 0) {
//       dodger.style.right = `${right + 1}px`;
//     }
//   }
